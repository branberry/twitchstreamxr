import React from 'react';
import './App.css';
import { Canvas, MeshProps } from '@react-three/fiber';

const Torus: React.FC<MeshProps> = props => {
  const { position } = props;
  return (
    <mesh>
      <torusGeometry position={position} />
      <meshToonMaterial color="blue" />
    </mesh>
  );
}


function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <Torus/>
    </Canvas>
  );
}

export default App;
