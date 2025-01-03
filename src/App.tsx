import { Canvas } from '@react-three/fiber'
import { UI } from './components/UI.tsx'
import { Experience } from './components/Experience.tsx'

function App() {
    return (
        <>
            <UI />
            <Canvas
                camera={{
                    position: [3, 3, 3],
                }}
            >
                <Experience />
            </Canvas>
        </>
    )
}

export default App
