import React from 'react';
import './App.css';
import { ARCanvas } from '@react-three/xr';
import { MeshProps } from '@react-three/fiber';

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
    <ARCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <Torus/>
    </ARCanvas>
  );
}

export default App;
