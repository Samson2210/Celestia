import React from 'react';
import darkclouds from '../assets/img/darkcloud.jpg';
import geosationary from '../assets/img/geostationary.gif';
import solarplane from '../assets/img/solarplane.jpg';


const SatelliteInfo = () => {
    return (
        <div className='bg-[rgb(246,246,246)] p-3 sm:p-8 m-5 sm:m-8 mb-0 text-justify rounded-sm'>
            <div className='md:p-4'>
            <h2 className='font-bold'>What Is a Satellite?</h2>
            <p>A satellite is anything that orbits a planet or a star. Earth is a satellite orbiting the Sun. The Moon is a satellite orbiting Earth. When you launch a spacecraft into orbit around Earth, that’s a satellite, too. This kind of satellite can help us learn about Earth and the universe. </p>

            <h2 className='font-bold'>Why are satellites important?</h2>
            <p>
                The view that satellites like GPS have allows them to see large areas of Earth at one time. This means satellites can collect more data, more quickly, than instruments on the ground.
            </p>
            <p>
                Satellites also can see into space better than telescopes at Earth's surface! That's because satellites fly above the clouds, dust, and molecules in the atmosphere that can block the view from the ground
            </p>
           <img className='h-72  md:h-96 w-full my-2 sm:p-5 rounded-[1.5rem]' src={darkclouds} alt="" />
            </div>

            <div className='p-4'>
            <h2 className='font-bold'>What are the parts of an artificial satellite?</h2>
            <p>
                Man-made satellites come in many shapes and sizes. But most have at least two parts in common - an antenna and a power source. The antenna sends and receives information, usually to and from Earth. Just like a toy that requires batteries to work here on Earth, satellites need power, too! There are several types of power sources for satellites, such as solar panels or batteries. Solar panels are cool because they power the satellite by turning sunlight into electricity.
            </p>
           <img className='h-72 md:h-96 w-full my-2 sm:p-5 rounded-[1.5rem]' src={solarplane} alt="" />
            <p>
                Many NASA satellites carry cameras and scientific sensors. Sometimes, these instruments point toward Earth to gather information about its land, air and water. Other times, they face toward space to collect data from the solar system and universe.
            </p>
            </div>

            <div className='p-4'>
            <h2 className='font-bold'>How do satellites orbit Earth?</h2>
            <p>Most satellites are launched into space on rockets. A satellite orbits Earth when its speed is balanced by the pull of Earth's gravity. Without this balance, the satellite would fly in a straight line off into space or fall back to Earth.

                Satellites orbit Earth at different heights, different speeds and along different paths. The two most common types of orbit are "geostationary" (jee-oh-STAY-shun-air-ee) and "polar."

                A geostationary satellite travels from west to east over the equator. It moves in the same direction and at the same rate Earth is spinning. From Earth, a geostationary satellite looks like it is standing still since it is always above the same location.</p>
           <img className='h-96 w-full my-2 sm:p-5 rounded-[1.5rem]' src={geosationary} alt="" />
            </div>
        </div>
    )
}

export default SatelliteInfo