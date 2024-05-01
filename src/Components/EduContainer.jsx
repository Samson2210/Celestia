import React, { useEffect, useState } from 'react';

function PlanetCard({ planet }) {
  return (
    <div className="planet-card bg-white rounded-lg overflow-hidden shadow-md flex flex-row w-full mb-8 ">
      <img src={`src/assets/Edu_Images/${planet.name.toLowerCase()}.jpg`} alt={`${planet.name} Image`} className="w-1/3 h-auto object-cover" />      
      <div className="planet-details flex flex-col justify-center p-4 w-2/3 ">
        
        {Object.entries(planet).map(([key, value]) => (
          <p key={key} className="my-2">{`${key}: ${value}`}</p>
        ))}
      </div>
    </div>
  );
}
export function EduContainer() {
    const [planets, setPlanets] = useState([]);
  const apiKey = '6x+tuH89G1+9/y5f5NYevQ==aNxDOw06o2I5H32s';
  const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const responses = await Promise.all(
        planetNames.map((planet) =>
          fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          })
        )
      );

      const data = await Promise.all(responses.map((response) => response.json()));
      setPlanets(data.map((planetData) => planetData[0]));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    return (
    <>
    <div id="scroll-target" className="w-10/12 max-w-3xl h-80vh left-4 bg-opacity-25 xl:mt-20 flex flex-col items-start justify-center pt-2 pl-8 z-10">
      <h1 className="m-0 text-black font-extrabold mt-0 xl:mt-0 text-3xl md:text-5xl w-full mb-8">Explore Educational Content</h1>
      <h3 className="text-black font-semibold mt-4 mb-3 text-xl md:text-2xl">Our Planets</h3>
      <div className="planet-container flex flex-wrap gap-8 justify-center items-center">        
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>

        
        </div>
        

        </>

    );
}
