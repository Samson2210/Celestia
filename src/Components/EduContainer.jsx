import React from "react";

export function EduContainer() {
    return (
        <>
            <div id="scroll-target" className="absolute w-10/12 max-w-3xl h-80vh left-4 bg-opacity-25 xl:mt-20 flex flex-col items-start justify-center pt-20 pl-8 z-10">
                <h1 className="m-0 text-black font-extrabold mt-0 xl:mt-0 text-3xl md:text-5xl w-full mb-8">Explore Educational Content</h1>
                {/* not yet done */}
                <h3 className="text-black font-semibold mt-4 mb-3 text-xl md:text-2xl">Our Planets</h3>
                <div className="flex justify-center">
                    <div className="w-2/5 min-w-80 min-h-cardHeight max-h-cardHeight bg-white border border-gray-200 rounded-md shadow-md overflow-hidden mx-4 flex">
                        <img className="w-1/2 h-full object-cover" id="card-img1" src="src/assets/Edu_Images/Earth.jpg" alt="Card Image" />
                        <div className="p-4 w-1/2">
                            <h1 className="text-lg font-bold mb-2" id="title1">Title</h1>
                            <div className="flex justify-between text-sm text-gray-500 mb-2">
                                <h5 className="font-medium" id="site1">Site</h5>
                                <h5 className="font-medium" id="date1">Published on</h5>
                            </div>
                            {/* <button className="bg-black text-white rounded-md px-4 py-2 mx-auto block" id="article-link1" onClick={redirectToPage}>Full article</button> */}
                        </div>
                    </div>
                </div>



            </div>


        </>

    );
}
