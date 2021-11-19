

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import {  useRef,useState } from 'react';
import { useSpring, animated } from '@react-spring/three'
import React from 'react';


export function Kurek2(props) {
  const [active, setActive]=useState(false)
  const myMesh = useRef();
  const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula3_kurek.glb')
  //animatio segment start
  const {rotation,position}= useSpring({ rotation: active ? [0,0,0] : [0,Math.PI/2,0], position: active ?[0,0,0] : [-0.05,0,-0.07], config: { duration: 3000 } })
  
 
  // animation segment end

  return (
    <>
      <OrbitControls />
      <animated.mesh rotation={rotation} position={position}  ref={myMesh}>
      <primitive object={gltf.scene} dispose={null}  onClick={() => setActive(!active)} />
      </animated.mesh>
     
    </>
  )
}