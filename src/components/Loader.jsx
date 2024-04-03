// import {Html,useProgress} from '@react-three/drei'

// const Loader = () => {
//   return (
//     <Html>
//       <span className="canvas-load"></span>
//       <p 
//       style={{
//         fontSize: 14,
//         color: '#f1f1f1',
//         fontweight:800,
//         marginTop:40
//       }}>  {progress.toFixed(2)}%</p>

      
//     </Html>
//   )
// }

// export default Loader
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;