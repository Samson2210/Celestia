import React from 'react';
import Globe from 'react-globe.gl';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import earth from '../assets/img/earth.jpg';

const SatelliteTypes = () => {
  const EARTH_RADIUS_KM = 6371; // km
  const TIME_STEP = 3 * 1000; // per frame
  const globeEl = useRef();
  const [satData, setSatData] = useState([]);
  const [globeRadius, setGlobeRadius] = useState();
  const [satelliteAltitude, setSatelliteAltitude] = useState(1.8); // Default altitude
  const [selectedSatellite, setSelectedSatellite] = useState(null);

  // Fetch satellite data
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => {
          setSatData([data]); // Convert data to an array
        })
        .catch(error => {
          console.error('Error fetching satellite data:', error);
        });
    }, 1 * 1000);

    return () => clearInterval(interval);
  }, []);

  const objectsData = satData.map(d => ({
    id: d.id,
    name: d.name,
    lat: d.latitude,
    lng: d.longitude,
    alt: d.altitude / EARTH_RADIUS_KM, // Altitude adjusted
  }));

  const onSatelliteClicked = (satellite) => {
    setSelectedSatellite(satellite);
  };

  const createSatellite = (orbitRadius, orbitInclination) => {
    const satGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Sphere geometry
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    const satellite = new THREE.Mesh(satGeometry, satMaterial);

    // Position the satellite in its orbit
    const angle = (Date.now() % 360) * (Math.PI / 180);
    const x = orbitRadius * Math.cos(angle);
    const z = orbitRadius * Math.sin(angle);
    satellite.position.set(x, orbitInclination, z);

    // Add click event to select satellite
    satellite.onClick = () => onSatelliteClicked({ name: 'Satellite Name', id: 'Satellite ID' });

    return satellite;
  };

  const satellites = [
    createSatellite(6, 0),
    createSatellite(8, 0)
    // Add more satellites as needed
  ];

  const onZoomIn = () => {
    setSatelliteAltitude(satelliteAltitude - 0.1);
  };

  const onZoomOut = () => {
    setSatelliteAltitude(satelliteAltitude + 0.1);
  };

  return (
    <div>
      <div>
        <button onClick={onZoomIn}>Zoom In</button>
        <button onClick={onZoomOut}>Zoom Out</button>
      </div>
      <Globe
        ref={globeEl}
        width={window.innerWidth}
        height={500}
        globeImageUrl={earth}
        objectsData={objectsData}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectThreeObject="sphere" // Use sphere as the 3D object
        satellites={satellites}
        satelliteAltitude={satelliteAltitude}
      />
      {selectedSatellite && <div>Selected Satellite: {selectedSatellite.name}</div>}
    </div>
  );
};

export default SatelliteTypes;
