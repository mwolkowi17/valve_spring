
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

export function Scene(props) {
    //const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula3_korpus.glb')
    return (
      <>
        <OrbitControls />
        <primitive object={gltf.scene} onDoubleClick={props.showDetails}/>
      </>
    )
  }