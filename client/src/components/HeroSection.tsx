import React, { Suspense } from 'react'
import './hero.scss'
import Islandmodel from './IslandModel'

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
                <Islandmodel></Islandmodel>
            </div>
        </div>
    </div>
  )
}

export default HeroSection





