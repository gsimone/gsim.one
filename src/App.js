import React, { Suspense } from "react";
import Scene from './Scene'

// function Scene() {
//   return (
//     <Canvas
//       shadowMap
//       colorManagement
//       camera={{ position: [-4, 4, -4], far: 50 }}
//     >
//       <ambientLight />
//       <spotLight
//         intensity={2}
//         position={[20, 20, 20]}
//         shadow-bias={-0.00005}
//         angle={Math.PI / 6}
//         shadow-mapSize-width={2048}
//         shadow-mapSize-height={2048}
//         castShadow
//       />
//       <Sphere args={[2, 8, 8]}>
//         <meshBasicMaterial attach="material" wireframe />
//       </Sphere>
//       <Suspense fallback={null}>
//         <StandardEffects smaa bloom={{ luminanceThreshold: 0.99 }} />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }

function App() {
  return (
    <>
      <div
        className="
          h-screen 
          w-screen 

          text-white 
          
          flex 
          justify-center 
          items-center 

          text-6xl
          font-display
          font-black

          absolute
          z-50

          pointer-events-none	
        "
      >
        {/* Hello world! */}
      </div>
      <div className="z-30 absolute top-0 left-0 right-0 bottom-0">
        <Scene />
      </div>
    </>
  );
}

export default App;
