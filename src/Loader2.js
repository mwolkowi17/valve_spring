

import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import {  useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three'



export function Kurek(props) {
  const [active, setActive]=useState(false)
  const myMesh = useRef();
  const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula3_kurek_blue.glb')
  //const gltfcopy = useMemo(() => gltf.scene.clone(), [gltf.scene])

  //animatio segment start
  //add change position
  const {rotation,position}= useSpring({ rotation: active ? [0,0,0] : [0,Math.PI/2,0], position: active ?[0,0,0] : [-0.05,0,-0.07] ,config: { duration: 3000 }  })
 
  // animation segment end

  return (
    <>
      <OrbitControls />
      <animated.mesh rotation={rotation} position={position} onClick={() => setActive(!active)} ref={myMesh}>
      <primitive object={gltf.scene}  ref={myMesh} dispose={null} />
      </animated.mesh>
    </>
  )
}