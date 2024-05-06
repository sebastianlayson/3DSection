import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel1 = () => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/pc_cpu_processor.glb');
    
    // Create a ref to hold the model's object
    const modelRef = useRef();
    
    // Use the useFrame hook to apply rotation to the model
    useFrame(() => {
        if (modelRef.current) {
            // Increment the model's y rotation slightly on each frame for spinning
            modelRef.current.rotation.y += 0.01;
        }
    });

    // Render the model as a primitive object, with the ref attached
    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={[1, 1, 1]}
            position={[0, 0, 0]}
        />
    );
};

export default GLBModel1;
