"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroParticleSceneProps {
  motionEnabled: boolean;
}

const vertexShader = `
attribute vec3 aColor;
attribute float aSeed;
uniform float uTime;
uniform float uProgress;
uniform float uScale;
uniform float uDpr;
varying vec3 vColor;
varying float vAlpha;

void main() {
  float p = smoothstep(0.02, 0.82, uProgress);
  
  // Mathematical undulating ribbon formula
  vec3 target = vec3(
    (aSeed - 0.5) * 2.5,
    sin(aSeed * 25.1327) * 0.055 + (floor(position.x * 4.0 + 2.0) - 2.0) * 0.18,
    sin(aSeed * 18.0) * 0.1
  );
  
  vec3 pos = mix(position, target, p);
  
  // Organic shimmer wave
  float edge = smoothstep(0.18, 0.5, abs(position.x));
  pos.x += sin(uTime * 0.3 + aSeed * 40.0) * 0.008 * (edge + p);
  pos.y += sin(uTime * 0.25 + aSeed * 20.0) * 0.004 * p;
  pos.z += sin(aSeed * 64.0 + uTime * 0.2) * 0.015;
  
  vec4 mv = modelViewMatrix * vec4(pos * uScale, 1.0);
  gl_Position = projectionMatrix * mv;
  
  gl_PointSize = (1.15 + dot(aColor, vec3(0.299, 0.587, 0.114)) * 0.9) * uDpr;
  vColor = mix(aColor, vec3(1.0, 0.44, 0.18), p * 0.55);
  
  // Smoothly blend edges into background:
  // Initial state: smooth Y fade on face
  // Dispersed state: smooth horizontal fade at the tips of the 2.5-width ribbon
  float fadeY = smoothstep(0.5, 0.32, abs(position.y));
  float fadeX = smoothstep(1.25, 0.70, abs(pos.x));
  vAlpha = (1.0 - p * 0.32) * fadeY * mix(1.0, fadeX, p);
}
`;

const fragmentShader = `
varying vec3 vColor;
varying float vAlpha;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float alpha = smoothstep(0.5, 0.27, d) * vAlpha;
  if (alpha < 0.02) discard;
  gl_FragColor = vec4(vColor * 1.25, alpha);
}
`;

export default function HeroParticleScene({
  motionEnabled,
}: HeroParticleSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const motionRef = useRef(motionEnabled);

  useEffect(() => {
    motionRef.current = motionEnabled;

    const handleMotion = (e: Event) => {
      const ce = e as CustomEvent<boolean>;
      if (typeof ce.detail === "boolean") {
        motionRef.current = ce.detail;
      }
    };
    window.addEventListener("motion-change", handleMotion);
    return () => window.removeEventListener("motion-change", handleMotion);
  }, [motionEnabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let points: THREE.Points | null = null;
    let geometry: THREE.BufferGeometry | null = null;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 5);

    const calcViewport = () => {
      const vHeight =
        2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      const vWidth = vHeight * camera.aspect;
      return { vHeight, vWidth };
    };

    const { vHeight } = calcViewport();

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uScale: { value: 1 },
        uDpr: { value: Math.min(window.devicePixelRatio, 2) },
      },
    });

    const updateMeshAlignment = () => {
      const portraitEl = document.getElementById("hero-portrait-anchor");
      const { vHeight: currentVHeight } = calcViewport();

      if (portraitEl && points) {
        const rect = portraitEl.getBoundingClientRect();
        const portraitCenterY = rect.top + rect.height / 2;
        const targetY =
          currentVHeight / 2 -
          (portraitCenterY / window.innerHeight) * currentVHeight;
        points.position.y = targetY;
        points.position.x = 0;

        const targetScale = (rect.height / window.innerHeight) * currentVHeight;
        material.uniforms.uScale.value = targetScale;
      }
    };

    const img = new Image();
    img.src = "/images/aakash-bw-v2.jpg";
    img.onload = () => {
      const sampleW = window.innerWidth < 700 ? 180 : 300;
      const sampleH = Math.round(sampleW * 1.25);
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = sampleW;
      sampleCanvas.height = sampleH;
      const ctx = sampleCanvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, sampleW, sampleH);
      const imgData = ctx.getImageData(0, 0, sampleW, sampleH).data;

      const positions: number[] = [];
      const colors: number[] = [];
      const seeds: number[] = [];

      for (let y = 0; y < sampleH; y++) {
        for (let x = 0; x < sampleW; x++) {
          const normX = x / sampleW - 0.5;
          const normY = 0.5 - y / sampleH;

          const idx = (y * sampleW + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

          if (luminance >= 0.035) {
            positions.push(normX * 0.8, normY, 0.025 * luminance);
            const gray = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            colors.push(gray, gray, gray);
            seeds.push(((127 * x + 311 * y) % 997) / 997);
          }
        }
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute(
        "aColor",
        new THREE.Float32BufferAttribute(colors, 3),
      );
      geometry.setAttribute(
        "aSeed",
        new THREE.Float32BufferAttribute(seeds, 1),
      );

      const pointsMesh = new THREE.Points(geometry, material);
      points = pointsMesh;
      scene.add(pointsMesh);
      updateMeshAlignment();
      setIsLoaded(true);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      updateMeshAlignment();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Track scroll
    let heroScrollProgress = 0;
    const handleScroll = () => {
      const heroEl = document.querySelector(".hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const scrolled = -rect.top;
        const total = rect.height;
        heroScrollProgress = Math.min(Math.max(scrolled / total, 0), 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const clock = new THREE.Clock();
    let currentProgress = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (material) {
        if (motionRef.current) {
          const elapsedTime = clock.getElapsedTime();
          material.uniforms.uTime.value = elapsedTime;
          currentProgress += (heroScrollProgress - currentProgress) * 0.08;
          material.uniforms.uProgress.value = currentProgress;
        } else {
          material.uniforms.uTime.value = 0;
          currentProgress += (0 - currentProgress) * 0.12;
          material.uniforms.uProgress.value = currentProgress;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      geometry?.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
