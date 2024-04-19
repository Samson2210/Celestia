import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../Earth'

const Satellite = () => {
  return (
    <>
    <h1>Satellite</h1>
    <Canvas>
    <ambientLight/>
    <OrbitControls/>
    <Suspense fallback={null}>
    <Earth/>
    </Suspense>
    {/* <Environment preset='sunset'/> */}
    </Canvas>
    </>
  )
}

export default Satellite