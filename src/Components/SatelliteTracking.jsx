import React from 'react'
import Globe from 'react-globe.gl'
import { useMemo } from 'react';
import { useState,useEffect,useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from '//unpkg.com/three/build/three.module.js';
const SatelliteTracking = () => {
  const EARTH_RADIUS_KM = 6371; // km
  const SAT_SIZE = 8; // km
  const TIME_STEP = 3 * 1000; // per frame
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [time, setTime] = useState(new Date());
  const [globeRadius, setGlobeRadius] = useState();



  const w = window.innerWidth;
  const shiftFactor = 0.5;
  const shiftAmmount = shiftFactor * w;

  useEffect(() => {
    // time ticker
    const interval = setInterval(() => {
      setTime(time => new Date(+time + TIME_STEP));
    }, TIME_STEP);
    
    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    
    // load satellite data
    const interval = setInterval(() =>{fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json())
    .then(data => {
      console.log('log')
      setSatData([data]); // Converting data to an array for consistency with the previous data format
    })
    .catch(error => {
      console.error('Error fetching satellite data:', error);
    });},1*1000) ;
    // fetchISSData();
    return () => clearInterval(interval);
  });

  const objectsData = useMemo(() => {
    if (!satData) return [];

    // Transform satellite data to match previous format
    return satData.map(d => ({
      name: d.name,
      lat: d.latitude,
      lng: d.longitude,
      alt: d.altitude / EARTH_RADIUS_KM // Altitude adjusted to match previous units
    }));
  } );

  const cameraPosition = useMemo(() => {
    if (!satData) return [0, 0, 0];

    // Calculate position of the ISS relative to the Earth's surface
    const phi = (90 - satData.latitude) * (Math.PI / 180);
    const theta = (180 - satData.longitude) * (Math.PI / 180);

    // Convert polar coordinates to Cartesian coordinates
    const x = (EARTH_RADIUS_KM + satData.altitude) * Math.sin(phi) * Math.cos(theta);
    const y = (EARTH_RADIUS_KM + satData.altitude) * Math.cos(phi);
    const z = (EARTH_RADIUS_KM + satData.altitude) * Math.sin(phi) * Math.sin(theta);

    return [x, y, z];
  }, [satData]);

  const satObject = useMemo(() => {
    const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE / 2, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    return new THREE.Mesh(satGeometry, satMaterial);
  }, [satData]);


  useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.pointOfView({ altitude: 3.5 });
  }, []);
  return (
    <div className=' z-0'>
      <Globe 
        width={shiftAmmount}
        ref={globeEl}
        globeImageUrl="src\assets\earth-blue-marble.jpg"
        cameraPosition={cameraPosition}
        objectsData={objectsData}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        objectFacesSurface={false}
        objectThreeObject={satObject}
      />
      <div id="time-log">Hello</div>
    </div>
  );
}

export default SatelliteTracking