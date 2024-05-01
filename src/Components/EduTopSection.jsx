import React from "react";

function handleButtonClick() {
    // Find the element with the id "scroll-target" (assuming it's in the EduContainer component)
    const targetElement = document.getElementById("scroll-target");
    
    // Scroll to the target element
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
}



export function EduTopSection() {
    return (
    <>
        <div className="absolute w-10/12 max-w-3xl h-80vh left-4 bg-opacity-25 xl:mt-20 flex flex-col items-start justify-center pt-20 pl-8 z-10">
            <h1 className="m-0 text-white font-extrabold mt-0 xl:mt-0 text-3xl md:text-7xl w-full mb-8">Explore the Cosmos</h1>
            <h4 className="pt-4 pb-3 text-white font-semibold md:text-3xl">Discover the Wonders of Space</h4>
            <div className="max-w-md w-full">
                <p className="m-0 pb-6 text-left text-white text-base md:text-lg leading-7">
                    Welcome to Celestia, your portal to the mysteries of the universe. Embark on an educational journey as we delve into the depths of space, uncovering the secrets of planets, moons, rovers, satellites, and more. Let your curiosity guide you through the cosmos!
                </p>
                <p className="m-0 pb-6 text-left text-white text-base md:text-lg leading-7">
                    Ready to explore further? Click the button below and dive deeper into the wonders of space!
                </p>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
    <a href="#scroll-target" className="px-8 py-4 bg-green-600 text-white text-base md:text-lg font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-transparent hover:border-2 hover:border-green-600 focus:outline-none focus:border-green-600" onClick={handleButtonClick}>Begin Your Exploration</a>
</div>

    </>

    );
}
