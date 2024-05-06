import React, { useRef } from 'react';
import { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './cssfiles/ThreeDObject.css';

// Component to render the 3D model
const ModelRenderer = ({ url }) => {
    // Load the GLB/GLTF file using the provided URL
    const { scene } = useGLTF(url);

    // Create a reference for the 3D model
    const modelRef = useRef();

    // Use the useFrame hook to rotate the model slowly
    useFrame(() => {
        if (modelRef.current) {
            // Rotate the model around the y-axis (vertically) slowly
            modelRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
        }
    });

    // Render the 3D model with the provided reference
    return <primitive object={scene} ref={modelRef} scale={[1, 1, 1]} />;
};

const ThreeDObject = () => {
    // Define the state for the model path
    // Make sure the file path is correct and accessible
    const [modelPath] = useState('src/assets/models/gaming_desktop_pc.glb');

    return (
        <div className="three-d-object" style={{ backgroundColor: "#04151f" }}>
            <Canvas camera={{ position: [15, 15, 15], fov: 50 }}>
                {/* Add ambient lighting for better visibility */}
                <ambientLight intensity={1} />
                {/* OrbitControls for interactive camera control */}
                <OrbitControls />
                {/* Render the 3D model using the ModelRenderer component */}
                {modelPath && <ModelRenderer url={modelPath} />}
            </Canvas>
        </div>
    );
};

export default ThreeDObject;
