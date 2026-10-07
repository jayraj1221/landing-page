'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { RotateCw, Sparkles, Hand } from 'lucide-react';

export default function Tactile3DYarnSkein() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeColor, setActiveColor] = useState('#D97752');

  const COLOR_OPTIONS = [
    { name: 'Terracotta', hex: '#D97752' },
    { name: 'Matcha Sage', hex: '#8B9E6E' },
    { name: 'Marigold Ochre', hex: '#DE9B26' },
    { name: 'Vintage Teal', hex: '#187787' },
    { name: 'Blush Coral', hex: '#F07073' },
  ];

  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // Renderer setup with alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Warm Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffedd5, 2.4);
    dirLight1.position.set(5, 5, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd97752, 1.5);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    // Group to hold the yarn ball
    const yarnGroup = new THREE.Group();
    scene.add(yarnGroup);

    // Core textured ball
    const coreGeo = new THREE.SphereGeometry(1.3, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeColor),
      roughness: 0.85,
      metalness: 0.05,
    });
    materialRef.current = coreMat;
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    yarnGroup.add(coreMesh);

    // Woven yarn strands: procedural winding torus knots & rings wrapping the sphere
    const strandGeo1 = new THREE.TorusGeometry(1.35, 0.07, 16, 100);
    const strandMat1 = new THREE.MeshStandardMaterial({
      color: new THREE.Color(activeColor),
      roughness: 0.9,
    });
    const strand1 = new THREE.Mesh(strandGeo1, strandMat1);
    strand1.rotation.x = Math.PI / 3;
    strand1.rotation.y = Math.PI / 6;
    yarnGroup.add(strand1);

    const strandGeo2 = new THREE.TorusGeometry(1.37, 0.065, 16, 100);
    const strand2 = new THREE.Mesh(strandGeo2, strandMat1);
    strand2.rotation.x = -Math.PI / 4;
    strand2.rotation.z = Math.PI / 3;
    yarnGroup.add(strand2);

    const strandGeo3 = new THREE.TorusGeometry(1.36, 0.06, 16, 100);
    const strand3 = new THREE.Mesh(strandGeo3, strandMat1);
    strand3.rotation.y = Math.PI / 2.5;
    strand3.rotation.z = -Math.PI / 5;
    yarnGroup.add(strand3);

    // Orbiting cotton dust / lint particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 4.5;
      particlePos[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePos[i + 2] = (Math.random() - 0.5) * 4.5;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xdeb887,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interaction & drag rotation variables
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 2000);
    };

    // Touch support for mobile visitors at the stall
    const onTouchStart = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      targetRotationY += deltaX * 0.012;
      targetRotationX += deltaY * 0.012;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 2000);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotate) {
        yarnGroup.rotation.y += 0.007;
        yarnGroup.rotation.x += 0.003;
      } else {
        yarnGroup.rotation.y += (targetRotationY - yarnGroup.rotation.y) * 0.1;
        yarnGroup.rotation.x += (targetRotationX - yarnGroup.rotation.x) * 0.1;
      }

      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      coreGeo.dispose();
      coreMat.dispose();
      strandGeo1.dispose();
      strandGeo2.dispose();
      strandGeo3.dispose();
      strandMat1.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  // Update color dynamically when swatch clicked
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(activeColor);
    }
  }, [activeColor]);

  return (
    <div className="relative rounded-[36px] bg-parchment-100/90 border-2 border-parchment-300 p-6 sm:p-8 shadow-soft-lift overflow-hidden flex flex-col items-center text-center">
      {/* Washi tape detail */}
      <div className="washi-tape-tab" />

      {/* Header */}
      <div className="flex items-center justify-between w-full mb-2">
        <span className="craft-stamp px-3 py-1 text-[9px] font-bold text-terracotta border-terracotta">
          WebGL 3D Studio
        </span>
        <span className="text-[11px] text-espresso-600 font-medium flex items-center gap-1">
          <Hand className="h-3 w-3 text-terracotta animate-bounce" />
          Drag to spin 360°
        </span>
      </div>

      <h3 className="font-editorial-heading text-xl sm:text-2xl font-bold text-espresso-900 mt-1">
        Tactile 3D Yarn Ball
      </h3>
      <p className="text-xs text-espresso-600 max-w-xs mt-1">
        Real-time 3D simulation of Kalapriti's hand-dyed organic combed cotton fibers.
      </p>

      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={mountRef}
        className="w-full h-64 sm:h-72 cursor-grab active:cursor-grabbing flex items-center justify-center relative touch-none my-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Color Swatch Selector for the 3D Ball */}
      <div className="w-full pt-3 border-t border-parchment-200 flex flex-wrap items-center justify-center gap-2">
        <span className="text-[10px] uppercase font-bold text-espresso-700 mr-1">
          Fiber Shade:
        </span>
        {COLOR_OPTIONS.map((c) => (
          <button
            key={c.hex}
            onClick={() => setActiveColor(c.hex)}
            className={`h-7 px-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 transition-all ${
              activeColor === c.hex
                ? 'bg-espresso-900 text-white shadow-md scale-105'
                : 'bg-white text-espresso-800 border border-parchment-300 hover:bg-parchment-200'
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full inline-block" style={{ backgroundColor: c.hex }} />
            <span>{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
