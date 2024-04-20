import React, { useRef } from 'react';
import SatelliteTracking from './SatelliteTracking';
const Satellite = () => {


  return (
    <div className='flex bg-[#000011]'>
    <SatelliteTracking/>
    <div className='z-10 text-white'>Satellite</div>
    </div>
  );
};

export default Satellite;
