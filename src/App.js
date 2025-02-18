import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PhoneCase from "./components/PhoneCase";

const App = () => {
  const [textureUrl, setTextureUrl] = useState("/default-texture.jpg");

  const handleTextureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTextureUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleTextureUpload} />
      <Canvas style={{ width: "100%", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} />
        <PhoneCase textureUrl={textureUrl} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
