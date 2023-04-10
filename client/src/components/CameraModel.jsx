import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import getGLTFAsset from './getGLTFAsset'; // import the getGLTFAsset function

function Model(props) {
  const { nodes, materials } = useGLTF(props.url);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.camera.geometry} material={materials.camera} rotation={[0, -Math.PI / 2, 0]} scale={0.57} />
      <mesh geometry={nodes.tripod.geometry} material={materials.tripod} rotation={[0, -Math.PI / 2, 0]} scale={0.57} />
    </group>
  );
}

function Cameramodel() {
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    async function loadModel() {
      const modelData = await getGLTFAsset('AntiqueCamera.gltf'); // use the getGLTFAsset function to fetch the model data
      const loader = new GLTFLoader();
      const blob = new Blob([modelData], { type: 'model/gltf+json' });
      const url = URL.createObjectURL(blob);
      loader.load(url, (gltf) => {
        setModelUrl(gltf);
      });
    }

    loadModel();
  }, []);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        {modelUrl && <Model url={modelUrl} />}
      </Suspense>
    </Canvas>
  );
}

export default Cameramodel;
