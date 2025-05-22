'use client'

import { useState } from "react";

const crew = [
    {
        role: "commander",
        name: "Douglas Hurley",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: "/crew-1.png"
    },

    {
        role: "mission specialist",
        name: "Mark Shuttleworth",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: "/crew-2.png"
    },

    {
        role: "pilot",
        name: "Victor Glover",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        image: "/crew-3.png"
    },

]

export default function CrewPage() {

    const [activeContent, setActiveContent] = useState(0)

    return (
        <section>
            <div className="pt-30 lg:flex lg:gap-98">

                <div className="gap-2 flex flex-row items-center justify-center-safe  md:justify-start lg:hidden">
                    <h1 className="uppercase text-sm tracking-widest text-center lg:text-left text-gray-500">02</h1>
                    <h1>MEET YOUR CREW</h1>
                </div>








                <div className="flex flex-col gap-5 text-center lg:text-left">
                    
                <div className="pb-30 gap-2 flex-row items-center justify-center-safe  md:justify-start hidden lg:flex">
                    <h1 className="uppercase text-sm tracking-widest text-center lg:text-left text-gray-500">02</h1>
                    <h1>MEET YOUR CREW</h1>
                </div>

                            <h1 className="uppercase text-xl tracking-widest pb-2">
                                {crew[activeContent].role}</h1>
                            <h1 className="text-4xl">{crew[activeContent].name}</h1>
                            <p className="text-sm max-w-md text-blue-200">{crew[activeContent].description}</p>


                            <div className="pt-40 flex-row gap-4 hidden lg:block">
                            {crew.map((crew, index) => {
                                return (
                                    <button className="cursor-pointer" key={index} onClick={() => setActiveContent(index)}>
                                        <div className="w-3 h-3 rounded-full bg-white"></div>

                                    </button>
                                )
                            })}
                </div>  
                </div>


                        <div className="pt-10 flex flex-row gap-5 pb-8 justify-center lg:justify-start lg:hidden">
                            {crew.map((crew, index) => {
                                return (
                                    <button className="cursor-pointer" key={index} onClick={() => setActiveContent(index)}>
                                        <div className="w-3 h-3 rounded-full bg-white"></div>

                                    </button>
                                )
                            })}
                </div>  


                <div className="flex flex-col lg:flex-row gap-5">
                    <img src={crew[activeContent].image} alt="" className="flex flex-1 max-w-[500px] max-h-[550px]" />
                </div>


                


            </div>
        </section>
    )
}