import React, { useRef } from 'react';
import './App.css';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';

const Torus: React.FC<MeshProps> = props => {
  const mesh = useRef<MeshProps>();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime();
      mesh.current.rotation.y = clock.getElapsedTime();

    }
  });
  const { position, color, scale } = props;

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <torusGeometry />
      <meshToonMaterial color={color} />
    </mesh>
  );
}


function App() {
  return (
    <div style={{position: "relative", height: "40vh"}}>
      <Canvas style={{
        height: "100vh"
      }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Torus color="blue"/>
        <Torus color="red" position={[-2,0,-1]} scale={0.3}/>
        <Torus color="yellow" position={[-2,0,1]} scale={0.3}/>
        <Torus color="green" position={[2,0,1]} scale={0.3}/>
      </Canvas>
    </div>
  );
}

export default App;
