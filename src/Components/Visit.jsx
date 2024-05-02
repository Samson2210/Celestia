import React from 'react'
function SolarSystem() {
  return (
    <div className="planet bg-white rounded-lg overflow-hidden shadow-md">
    <img src="src/assets/Edu_Images/ss.gif" alt="Solar System" className="w-full h-auto object-cover" />
    <div className="planet-action flex items-center justify-between p-4">
      <h3 className="text-lg font-semibold">Solar System</h3>
      <button className="pic bg-black text-white px-4 py-2 rounded-lg">Visit</button>
    </div>
  </div>
  );
}

function Planet({ name, image }) {
  return (
    <div className="planet w-64 h-64 border border-gray-300 shadow-md rounded-md m-8">
      <img src={image} alt={`${name} Image`} className="w-full h-3/4 object-cover rounded-t-md" />
      <div className="planet-action flex justify-between items-center p-4">
        <h3>{name}</h3>
        <button className="pic px-4 py-2 bg-black text-white text-sm font-bold rounded-md">Visit</button>
      </div>
    </div>
  );
}

function Planets() {
  const planets = [
    { name: 'Earth', image: 'src/assets/Edu_Images/earth.gif' },
    { name: 'Moon', image: 'src/assets/Edu_Images/moon.gif' },
    { name: 'Mars', image: 'src/assets/Edu_Images/mars.gif' }
  ];

  return (
    <div className="planets flex justify-center h-full py-10 px-16">
      {planets.map((planet, index) => (
        <Planet key={index} name={planet.name} image={planet.image} />
      ))}
    </div>
  );
}

const Visit = () => {
  return (
    <>
    <SolarSystem />
    <Planets />
  </>
  )
}

export default Visit