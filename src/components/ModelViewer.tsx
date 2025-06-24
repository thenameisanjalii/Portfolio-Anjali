import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, Box3, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useLoading } from "../context/LoadingContext";

interface ModelProps {
  modelPath: string;
  animationType?: string;
}

const Model: React.FC<ModelProps> = ({ modelPath, animationType = "default" }) => {
  const { setIsLoading } = useLoading();
  const { scene, animations } = useGLTF(modelPath);
  const modelRef = useRef<Group>(new Group());
  const { actions, names } = useAnimations(animations, modelRef);

  useEffect(() => {
    // Set loading to true when component mounts
    setIsLoading(true);

    // Ensure the scene exists before accessing properties
    if (!scene || !modelRef.current) return;

    // Calculate bounding box to center and scale the model
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? 1 / maxDim : 1;

    // Adjust scene position and scale
    scene.position.sub(center);
    scene.scale.set(scale, scale, scale);

    // Clear the existing children and add the loaded scene to the modelRef
    modelRef.current.clear();
    modelRef.current.add(scene);

    // Play the specified animation or default to the first animation
    if (animationType && actions?.[animationType]) {
      actions[animationType]?.play();
    } else if (names.length > 0) {
      actions[names[0]]?.play();
    }

    // Set loading to false once everything is set up
    setIsLoading(false);
  }, [scene, animationType, actions, names, setIsLoading]);

  // Idle rotation for visual effect
  const rotationRef = useRef(0);
  useFrame(() => {
    if (modelRef.current) {
      rotationRef.current += 0.005;
      modelRef.current.rotation.y = rotationRef.current;
    }
  });

  return <primitive ref={modelRef} object={modelRef.current} />;
};

export default Model;
