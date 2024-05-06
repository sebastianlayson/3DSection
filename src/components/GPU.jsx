import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel2 = () => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/nvidia_geforce_rtx_3090_-_gpu.glb');
    
    // Create a ref to reference the model object
    const ref = useRef();
    
    // Use the useFrame hook to apply rotation to the model
    useFrame(() => {
        // Adjust the rotation speed as needed
        ref.current.rotation.y += 0.01;
    });

    // Return the model as a primitive object with the ref
    return <primitive ref={ref} object={scene} scale={[1, 1, 1]} position={[0, 3, 1]} />;
};

export default GLBModel2;
