import React, { useRef ,Suspense} from 'react';
import SatelliteTracking from './SatelliteTracking';
import { Canvas } from '@react-three/fiber';
import Iss from './Iss';
import { OrbitControls } from '@react-three/drei';

const Satellite = () => {


  return (
    <div className='flex bg-[#000011]'>
    <SatelliteTracking/>
    <div className='z-10 text-white'>Satellite</div>
    {/* <Canvas>
      <ambientLight/>
      <OrbitControls/>
      <Suspense>
        <Iss/>
      </Suspense>
    </Canvas> */}
    </div>
  );
};

export default Satellite;
