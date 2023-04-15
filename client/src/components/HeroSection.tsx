import React, { Suspense } from 'react'
import './hero.scss'
import Cameramodel from './IslandModel'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './IslandModel';

function HeroSection ()  {
  return (
    <div className='section'>
        <div className='container'>
            <div className='left-side'>
                <h1 className='titleunder'>Become Independent</h1>
                <p className='desc'>We help you become famous</p>
                <button className='learnbttn'>Learn more</button>
            </div>
            <div className='right-side'>
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
        </div>
    </div>
  )
}

export default HeroSection





