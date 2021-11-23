
import './App.css';
//import {useState} from 'react'
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei'
import { Scene } from './Loader';
import { Kurek } from './Loader2';
import { Kurek2 } from './Loader3';
import { Display } from './Display';



function App() {

  const [showA, setShow] = useState(true);
  const [showB, setShowB] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false)

  function changekurek() {
    setShowB(!showB);
    setShow(!showA)
  }

  

  function showDetailsFunc() {
    setIsDisplay(true)
  }

  function closeDetails(){
    setIsDisplay(false)
  }

  function Loader() {
    
    return <Html center style={{color:'white'}}>loading assets...</Html>
  }  

  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />
          <Suspense fallback={<Loader/>}>
          <Scene showDetails={showDetailsFunc}/>
         </Suspense>
          {showB && <Kurek2  />}
          {showA && <Kurek  />}

        </Suspense>
      </Canvas>
      <button id={'buttonkurek'} onClick={(event) => changekurek()}>Color</button>
      
      <Display isVisible={isDisplay ? 'visible' : 'hidden'} closeDisplay={closeDetails} />
      <p className={'instruction'}>[Click on color part to open/close valve]</p>
    </div>

  );
}

export default App;
