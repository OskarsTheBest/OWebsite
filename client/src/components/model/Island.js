import {useGLTF} from "@react-three/drei";


export default function Islandmodel() {
    const island = useGLTF('./island/fire_in_the_sky.glb');

    return(
        <>
            <primitive object={island.scene}/>
        </>
    )
}