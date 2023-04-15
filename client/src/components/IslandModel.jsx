import React, { useRef } from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';



export function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader,'https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.87, -1.6, 10.17]} rotation={[-0.26, 0, 0]} scale={0.25}>
          <group position={[0.01, -1.02, 4.04]} rotation={[1.18, 0.59, 1.03]}>
            <mesh geometry={nodes.Shell_Right005_0.geometry} material={materials['Lady_Red.001']} />
            <mesh geometry={nodes.Shell_Right005_1.geometry} material={materials['Lady_White.001']} />
            <mesh geometry={nodes.Shell_Right005_2.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[0.01, -1.02, 4.04]} rotation={[1.18, -0.59, -1.03]}>
            <mesh geometry={nodes.Shell_Left005_0.geometry} material={materials['Lady_Red.001']} />
            <mesh geometry={nodes.Shell_Left005_1.geometry} material={materials['Lady_White.001']} />
            <mesh geometry={nodes.Shell_Left005_2.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[0.08, -1, 2.33]}>
            <group position={[0.86, -0.6, -0.22]} rotation={[0.82, 0.49, 0.7]}>
              <group position={[1.48, -0.81, -0.11]}>
                <mesh geometry={nodes.Left_Leg_04037_0.geometry} material={materials['Lady_Black.001']} position={[0.01, 0.05, -1.78]} />
                <mesh geometry={nodes.Left_Leg_03037_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02199_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01037_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[-0.55, -0.17, 2.02]}>
            <group position={[-1.07, 0.5, -0.08]} rotation={[0.31, -0.82, -0.33]}>
              <group position={[-1.68, 0.74, 0.26]}>
                <mesh geometry={nodes.Left_Leg_04036_0.geometry} material={materials['Lady_Black.001']} position={[-0.39, 0.06, -1.92]} />
                <mesh geometry={nodes.Left_Leg_03036_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02198_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01036_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[-0.08, -1, 2.33]}>
            <group position={[-0.86, -0.6, -0.22]} rotation={[0.82, -0.4, -0.67]}>
              <group position={[-1.48, -0.81, -0.11]}>
                <mesh geometry={nodes.Left_Leg_04035_0.geometry} material={materials['Lady_Black.001']} position={[-0.01, 0.05, -1.78]} />
                <mesh geometry={nodes.Left_Leg_03035_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02197_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01035_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[0.55, -0.17, 2.02]}>
            <group position={[1.07, 0.5, -0.08]} rotation={[0.16, 0.95, 0.4]}>
              <group position={[1.68, 0.74, 0.26]}>
                <mesh geometry={nodes.Left_Leg_04034_0.geometry} material={materials['Lady_Black.001']} position={[0.39, 0.06, -1.92]} />
                <mesh geometry={nodes.Left_Leg_03034_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02196_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01034_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[0.52, 1.25, 1.87]}>
            <group position={[0.82, 0.8, -0.05]} rotation={[0.32, 0.95, -0.01]}>
              <group position={[1.48, 1.03, 0.03]}>
                <mesh geometry={nodes.Left_Leg_04033_0.geometry} material={materials['Lady_Black.001']} position={[-0.47, 0.92, -1.61]} />
                <mesh geometry={nodes.Left_Leg_03033_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02195_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01033_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[-0.52, 1.25, 1.87]}>
            <group position={[-0.82, 0.8, -0.05]} rotation={[0.56, -0.72, 0.32]}>
              <group position={[-1.48, 1.03, 0.03]}>
                <mesh geometry={nodes.Left_Leg_04032_0.geometry} material={materials['Lady_Black.001']} position={[0.47, 0.92, -1.61]} />
                <mesh geometry={nodes.Left_Leg_03032_0.geometry} material={materials['Lady_Black.001']} />
              </group>
              <mesh geometry={nodes.Left_Leg_02194_0.geometry} material={materials['Lady_Black.001']} />
            </group>
            <mesh geometry={nodes.Left_Leg_01032_0.geometry} material={materials['Lady_Black.001']} />
          </group>
          <group position={[0, -1.76, 2.87]} rotation={[0.31, 0, 0]}>
            <mesh geometry={nodes.Head016_0.geometry} material={materials['Lady_Black.001']} />
            <mesh geometry={nodes.Head016_1.geometry} material={materials['Lady_Eyes.001']} />
            <mesh geometry={nodes.Head016_2.geometry} material={materials['Lady_White.001']} />
          </group>
          <group position={[0, 1.05, 2.33]}>
            <mesh geometry={nodes.Wing_Right005_0.geometry} material={materials['Wing.001']} position={[0.87, -0.9, 1.56]} rotation={[0, -0.24, 0]} />
            <mesh geometry={nodes.Wing_Left005_0.geometry} material={materials['Wing.001']} position={[-0.87, -0.9, 1.56]} rotation={[0, 0.27, 0]} />
            <mesh geometry={nodes.Body025_0.geometry} material={materials['Lady_Black.001']} />
            <mesh geometry={nodes.Body025_1.geometry} material={materials['Lady_White.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}


function Islandmodel() {

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default Islandmodel;
