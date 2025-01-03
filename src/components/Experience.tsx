import type { FC } from 'react'
import { Avatar } from './Avatar.tsx'
import { OrbitControls } from '@react-three/drei'

export const Experience: FC = () => {
    return (
        <>
            <color attach={'background'} args={['#333']} />
            <OrbitControls />
            <Avatar />
        </>
    )
}
