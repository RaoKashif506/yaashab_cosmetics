"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform vec4 u_mouse;
  uniform vec3 u_color;

  #define PI 3.141528

  vec3 hsv(float h, float s, float v) {
    return ((clamp(abs(fract(h + vec3(0., .666, .333)) * 6. - 3.) - 1., 0., 1.) - 1.) * s + 1.) * v;
  }
  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1.0e-10)), d / (q.x + 1.0e-10), q.x);
  }
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  vec2 globalPos(vec2 pos) {
    return pos - u_mouse.xy * .25 + hash12(gl_FragCoord.xy + u_time * .1) * .0125;
  }
  float circle(vec2 pos, float lo, float hi) {
    return smoothstep(lo, hi, length(globalPos(pos)));
  }
  float lambert(vec3 normal, vec3 lightPos) {
    return max(dot(normal, lightPos), .05);
  }
  vec3 gradient(float d) {
    vec3 colA = mix(vec3(.99, .98, .98), vec3(1., .83, .88), d);
    vec3 colB = mix(u_color * .06, u_color * .9, smoothstep(0., 1., d));
    return mix(colA, colB, d);
  }
  vec3 coloredRim(vec2 pos, float light) {
    float rim = .035 + light * .05;
    float inner = .03 + light * .025;
    float dist = length(globalPos(pos));
    float mask = smoothstep(inner, rim, dist) * (1. - smoothstep(rim, rim + .05, dist));
    vec3 color = rgb2hsv(u_color);
    return hsv(color.x + dist * 2., color.y, 1.) * mask;
  }
  float sdfCircle(vec2 pos, float radius) { return length(globalPos(pos)) - radius; }
  vec2 sdfNormal(vec2 pos, float radius) {
    vec2 e = vec2(1. / u_resolution.x, 1. / u_resolution.y) * 1.5;
    float dx = sdfCircle(pos + vec2(e.x, 0.), radius) - sdfCircle(pos - vec2(e.x, 0.), radius);
    float dy = sdfCircle(pos + vec2(0., e.y), radius) - sdfCircle(pos - vec2(0., e.y), radius);
    return normalize(vec2(dx, dy));
  }
  vec3 shadeAt(vec2 pos, float light) {
    float d = 1. - circle(pos, .05, .3 + light * .025);
    return gradient(d);
  }
  vec3 refractSDFColor(vec2 pos, float light) {
    float radius = .175 + light * .6125;
    vec2 normal = normalize(sdfNormal(pos, radius));
    vec2 px = 1. / u_resolution.xy;
    vec3 red = shadeAt(pos + normal * px * 2., light);
    vec3 green = shadeAt(pos, light);
    vec3 blue = shadeAt(pos - normal * px * 2., light);
    return vec3(red.r, green.g, blue.b);
  }
  void main() {
    vec2 p = (vUv - .5) * vec2(u_resolution.x / u_resolution.y, 1.) * 2.;
    float angle = PI / 4.;
    vec2 rotated = vec2(
      p.x * cos(angle) - p.y * sin(angle),
      p.x * sin(angle) + p.y * cos(angle)
    );
    vec3 ray = vec3(0., 0., -1.);
    float rodX = fract(rotated.x * 2.) * 2. - 1.;
    vec3 normal = vec3(rodX, 0., -sqrt(max(0., 1. - rodX * rodX)));
    vec3 refracted = mix(normal, ray, .3);
    float zDist = .8 / (refracted.z - .8);
    vec3 position = vec3(p, 0.) + zDist * refracted;
    vec2 subPos = position.xy * position.z;

    vec3 lightPos = normalize(vec3(0., 0., -1.));
    float light = pow(lambert(normal, lightPos), 2.);
    float d = 1. - circle(subPos, .05, .3 + light * .0125);
    vec3 color = gradient(d) + coloredRim(subPos, light) * .65;
    float g = 1. - abs(normal.z);
    g = g * .8 / (g * .8 - g + 1.);
    float glass = 1. - ((1. - .3 * g) - g * hash12(gl_FragCoord.xy + d));
    color = mix(color, refractSDFColor(subPos, light), .65);
    color += light * color * .05 * d + color * glass * d * .05;
    color = pow(clamp(color, 0., 1.), vec3(1. / 1.222));
    gl_FragColor = vec4(color, 1.);
  }
`;

function ShaderPlane() {
  const mesh = useRef<THREE.Mesh>(null);
  const mouse = useRef(new THREE.Vector2());
  const target = useRef(new THREE.Vector2());
  const { size } = useThree();
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector3(1, 1, 1) },
    u_mouse: { value: new THREE.Vector4(0, 0, 0, 0) },
    u_color: { value: new THREE.Color("#f4b6c8") },
  }), []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      target.current.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const material = mesh.current.material as THREE.ShaderMaterial;
    material.uniforms.u_time.value = state.clock.elapsedTime * .65;
    material.uniforms.u_resolution.value.set(size.width, size.height, 1);
    mouse.current.lerp(target.current, .025);
    material.uniforms.u_mouse.value.set(mouse.current.x, mouse.current.y, 0, 0);
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} depthTest={false} depthWrite={false} />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div className="shader-background" aria-hidden="true">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ backgroundColor: "#fff" }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
