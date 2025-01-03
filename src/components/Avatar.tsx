import type { FC } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef } from 'react'

export const Avatar: FC = () => {
    const group = useRef()
    const { nodes, animations } = useGLTF('/models/Armature.glb')
    const { actions } = useAnimations(animations, group)

    return (
        <group ref={group} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/Armature.glb')
