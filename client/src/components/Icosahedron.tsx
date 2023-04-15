import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';



const Icosahedron = () => {
  return (
    <div className=' h-screen w-full'>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate/>
          <ambientLight intensity={1}/>
          <directionalLight position={[1,2,1]}/>
          <mesh>
            <icosahedronGeometry args={[1.25,0]}/>
            <meshStandardMaterial color="purple"/>
          </mesh>
        </Canvas>
    </div>
  )
}

export default Icosahedron