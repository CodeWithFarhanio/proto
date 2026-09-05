"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Earth3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // -----------------------------
    // SCENE
    // -----------------------------
    const scene = new THREE.Scene();

    // -----------------------------
    // CAMERA
    // -----------------------------
    const camera = new THREE.PerspectiveCamera(
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 4.4);

    // -----------------------------
    // RENDERER
    // -----------------------------
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setSize(
      mount.clientWidth,
      mount.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mount.appendChild(renderer.domElement);

    // -----------------------------
    // LIGHTING
    // -----------------------------
    const ambient = new THREE.AmbientLight(
      0x91a7ff,
      0.45
    );

    scene.add(ambient);

    const sun = new THREE.DirectionalLight(
      0xffffff,
      2.8
    );

    sun.position.set(4, 2, 5);

    scene.add(sun);

    // Soft blue fill
    const fill = new THREE.PointLight(
      0x4d7cff,
      1.2,
      8
    );

    fill.position.set(-4, -1, 3);

    scene.add(fill);

    // =====================================================
    // EARTH
    // =====================================================

    const earthGroup = new THREE.Group();

    scene.add(earthGroup);

    // -----------------------------
    // EARTH TEXTURE
    // -----------------------------
    function createEarthTexture() {
      const canvas = document.createElement("canvas");

      canvas.width = 1024;
      canvas.height = 512;

      const ctx = canvas.getContext("2d");

      // Ocean base
      const ocean = ctx.createLinearGradient(
        0,
        0,
        0,
        512
      );

      ocean.addColorStop(0, "#102c52");
      ocean.addColorStop(0.45, "#0a5271");
      ocean.addColorStop(0.7, "#073d5c");
      ocean.addColorStop(1, "#041b35");

      ctx.fillStyle = ocean;

      ctx.fillRect(0, 0, 1024, 512);

      // Ocean depth
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;

        const radius = 15 + Math.random() * 55;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

        gradient.addColorStop(
          0,
          "rgba(0,10,30,.25)"
        );

        gradient.addColorStop(
          1,
          "rgba(0,10,30,0)"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      // -----------------------------
      // CONTINENT FUNCTION
      // -----------------------------
      function land(points) {
        ctx.beginPath();

        points.forEach((p, i) => {
          if (i === 0) {
            ctx.moveTo(p[0], p[1]);
          } else {
            ctx.lineTo(p[0], p[1]);
          }
        });

        ctx.closePath();

        const gradient = ctx.createLinearGradient(
          0,
          80,
          0,
          430
        );

        gradient.addColorStop(
          0,
          "#a9bd70"
        );

        gradient.addColorStop(
          0.4,
          "#738f50"
        );

        gradient.addColorStop(
          1,
          "#304d3c"
        );

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.strokeStyle =
          "rgba(177,208,145,.18)";

        ctx.lineWidth = 2;

        ctx.stroke();
      }

      // North America
      land([
        [90, 130],
        [120, 100],
        [165, 82],
        [215, 92],
        [260, 120],
        [270, 150],
        [250, 175],
        [220, 185],
        [205, 220],
        [175, 230],
        [155, 210],
        [125, 205],
        [105, 180],
        [80, 165],
      ]);

      // South America
      land([
        [270, 245],
        [295, 260],
        [310, 290],
        [305, 325],
        [290, 360],
        [275, 405],
        [255, 385],
        [245, 350],
        [235, 320],
        [240, 285],
      ]);

      // Europe
      land([
        [445, 120],
        [465, 105],
        [490, 110],
        [510, 125],
        [500, 145],
        [475, 148],
        [455, 140],
      ]);

      // Africa
      land([
        [455, 170],
        [490, 155],
        [525, 170],
        [548, 205],
        [550, 245],
        [535, 285],
        [515, 325],
        [490, 345],
        [470, 315],
        [460, 280],
        [450, 235],
        [442, 200],
      ]);

      // Asia
      land([
        [500, 110],
        [535, 88],
        [580, 85],
        [630, 100],
        [685, 110],
        [730, 130],
        [775, 155],
        [765, 180],
        [725, 190],
        [680, 180],
        [640, 192],
        [600, 175],
        [555, 165],
        [520, 145],
      ]);

      // India
      land([
        [610, 190],
        [635, 205],
        [645, 230],
        [635, 255],
        [620, 270],
        [608, 245],
        [598, 215],
      ]);

      // Australia
      land([
        [715, 320],
        [750, 305],
        [790, 312],
        [825, 335],
        [815, 365],
        [780, 380],
        [740, 370],
        [710, 345],
      ]);

      // Greenland
      land([
        [330, 55],
        [360, 42],
        [390, 52],
        [405, 75],
        [380, 100],
        [350, 95],
      ]);

      // -----------------------------
      // TERRAIN
      // -----------------------------
      const terrain = [
        "#d0d98c",
        "#aabf72",
        "#829e5b",
        "#557b4d",
        "#3e6245",
      ];

      for (let i = 0; i < 260; i++) {
        const x = 70 + Math.random() * 760;
        const y = 60 + Math.random() * 350;

        ctx.globalAlpha =
          0.12 + Math.random() * 0.25;

        ctx.fillStyle =
          terrain[
            Math.floor(
              Math.random() * terrain.length
            )
          ];

        ctx.beginPath();

        ctx.ellipse(
          x,
          y,
          3 + Math.random() * 12,
          2 + Math.random() * 8,
          Math.random(),
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;

      // -----------------------------
      // MOUNTAIN DETAILS
      // -----------------------------
      ctx.strokeStyle =
        "rgba(45,55,43,.45)";

      ctx.lineWidth = 2;

      const mountains = [
        [120, 150, 90],
        [470, 195, 80],
        [540, 135, 130],
        [630, 155, 110],
      ];

      mountains.forEach(
        ([x, y, length]) => {
          ctx.beginPath();

          for (let i = 0; i < 14; i++) {
            const px =
              x + (length / 13) * i;

            const py =
              y -
              Math.sin(i * 1.7) *
                (5 + Math.random() * 9);

            if (i === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }

          ctx.stroke();
        }
      );

      // Ice
      ctx.fillStyle =
        "rgba(225,245,255,.9)";

      ctx.beginPath();

      ctx.ellipse(
        500,
        18,
        190,
        18,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.beginPath();

      ctx.ellipse(
        500,
        494,
        190,
        17,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      const texture =
        new THREE.CanvasTexture(canvas);

      texture.colorSpace =
        THREE.SRGBColorSpace;

      return texture;
    }

    // -----------------------------
    // EARTH MESH
    // -----------------------------
    const earthGeometry =
      new THREE.SphereGeometry(
        1.42,
        64,
        64
      );

    const earthTexture =
      createEarthTexture();

    const earthMaterial =
      new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.9,
        metalness: 0.05,
      });

    const earth =
      new THREE.Mesh(
        earthGeometry,
        earthMaterial
      );

    earthGroup.add(earth);

    // =====================================================
    // CITY / DATA POINTS
    // =====================================================

    const pointGroup =
      new THREE.Group();

    earthGroup.add(pointGroup);

    const pointGeometry =
      new THREE.SphereGeometry(
        0.018,
        8,
        8
      );

    const pointMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x75e6ff,
      });

    // Approximate interesting locations
    const locations = [
      [0.25, 0.65, 0.7],
      [-0.45, 0.5, 0.8],
      [0.5, 0.25, 0.95],
      [-0.2, -0.15, 1.15],
      [0.65, -0.15, 0.9],
      [-0.7, 0.1, 0.8],
      [0.15, 0.8, 0.65],
      [-0.5, -0.4, 0.85],
      [0.75, 0.2, 0.65],
      [-0.15, 0.3, 1.05],
      [0.35, -0.55, 0.8],
      [-0.65, -0.3, 0.75],
    ];

    locations.forEach(
      ([x, y, z]) => {
        const point =
          new THREE.Mesh(
            pointGeometry,
            pointMaterial
          );

        const vector =
          new THREE.Vector3(
            x,
            y,
            z
          ).normalize();

        point.position.copy(
          vector.multiplyScalar(1.445)
        );

        pointGroup.add(point);
      }
    );

    // =====================================================
    // CONNECTION ARCS
    // =====================================================

    const arcMaterial =
      new THREE.LineBasicMaterial({
        color: 0x62dfff,
        transparent: true,
        opacity: 0.28,
      });

    function createArc(
      start,
      end
    ) {
      const curve =
        new THREE.QuadraticBezierCurve3(
          start,
          new THREE.Vector3()
            .addVectors(start, end)
            .normalize()
            .multiplyScalar(1.72),
          end
        );

      const points =
        curve.getPoints(24);

      const geometry =
        new THREE.BufferGeometry().setFromPoints(
          points
        );

      return new THREE.Line(
        geometry,
        arcMaterial
      );
    }

    const arcPairs = [
      [0, 1],
      [1, 3],
      [3, 4],
      [4, 8],
      [8, 6],
      [6, 2],
      [2, 10],
    ];

    const vectors =
      locations.map(
        ([x, y, z]) =>
          new THREE.Vector3(
            x,
            y,
            z
          )
            .normalize()
            .multiplyScalar(1.445)
      );

    arcPairs.forEach(
      ([a, b]) => {
        pointGroup.add(
          createArc(
            vectors[a],
            vectors[b]
          )
        );
      }
    );

    // =====================================================
    // ATMOSPHERE
    // =====================================================

    const atmosphereGeometry =
      new THREE.SphereGeometry(
        1.53,
        48,
        48
      );

    const atmosphereMaterial =
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,

        uniforms: {
          glowColor: {
            value: new THREE.Color(
              "#4ba8ff"
            ),
          },
        },

        vertexShader: `
          varying vec3 vNormal;

          void main() {

            vNormal =
              normalize(
                normalMatrix * normal
              );

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `,

        fragmentShader: `
          uniform vec3 glowColor;

          varying vec3 vNormal;

          void main() {

            float glow =
              pow(
                0.75 -
                dot(
                  vNormal,
                  vec3(0.0,0.0,1.0)
                ),
                3.5
              );

            gl_FragColor =
              vec4(
                glowColor,
                glow * 0.8
              );
          }
        `,
      });

    const atmosphere =
      new THREE.Mesh(
        atmosphereGeometry,
        atmosphereMaterial
      );

    earthGroup.add(atmosphere);

    // =====================================================
    // STARS
    // =====================================================

    const starsGeometry =
      new THREE.BufferGeometry();

    const starPositions = [];

    for (let i = 0; i < 450; i++) {
      const radius =
        6 + Math.random() * 5;

      const theta =
        Math.random() *
        Math.PI *
        2;

      const phi =
        Math.acos(
          2 * Math.random() - 1
        );

      starPositions.push(
        radius *
          Math.sin(phi) *
          Math.cos(theta),

        radius *
          Math.sin(phi) *
          Math.sin(theta),

        radius *
          Math.cos(phi)
      );
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        starPositions,
        3
      )
    );

    const starsMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.014,
        transparent: true,
        opacity: 0.65,
      });

    const stars =
      new THREE.Points(
        starsGeometry,
        starsMaterial
      );

    scene.add(stars);

    // =====================================================
    // CONTROLS
    // =====================================================

    const controls =
      new OrbitControls(
        camera,
        renderer.domElement
      );

    controls.enableDamping = true;
    controls.dampingFactor = 0.045;

    controls.enablePan = false;

    controls.rotateSpeed = 0.45;
    controls.zoomSpeed = 0.45;

    controls.minDistance = 2.8;
    controls.maxDistance = 5.5;

    controls.minPolarAngle =
      Math.PI * 0.25;

    controls.maxPolarAngle =
      Math.PI * 0.75;

    let dragging = false;

    controls.addEventListener(
      "start",
      () => {
        dragging = true;
      }
    );

    controls.addEventListener(
      "end",
      () => {
        dragging = false;
      }
    );

    // =====================================================
    // ANIMATION
    // =====================================================

    let frame;

    const animate = () => {
      frame =
        requestAnimationFrame(animate);

      if (!dragging) {
        earth.rotation.y += 0.0012;

        pointGroup.rotation.y += 0.0012;
      }

      controls.update();

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =====================================================
    // RESIZE
    // =====================================================

    const resize = () => {
      const width =
        mount.clientWidth;

      const height =
        mount.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          1.5
        )
      );
    };

    window.addEventListener(
      "resize",
      resize
    );

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "resize",
        resize
      );

      controls.dispose();

      earthGeometry.dispose();
      earthTexture.dispose();
      earthMaterial.dispose();

      pointGeometry.dispose();
      pointMaterial.dispose();

      arcMaterial.dispose();

      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();

      starsGeometry.dispose();
      starsMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement.parentNode
      ) {
        renderer.domElement.parentNode.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}