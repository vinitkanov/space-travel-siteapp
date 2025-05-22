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
            <div className="container md:max-w-6xl m-auto pt-30">

                <div className="gap-4">
                    <h1 className="uppercase text-sm tracking-widest text-center lg:text-left">02<span>MEET YOUR CREW</span></h1>
                </div>

                <div className="flex flex-col gap-5 text-center lg:text-left">
                            <h1 className="uppercase text-xl tracking-widest pb-4">
                                {crew[activeContent].role}</h1>
                            <h1 className="text-4xl">{crew[activeContent].name}</h1>
                            <p className="text-sm max-w-md">{crew[activeContent].description}</p>
                        </div>


                        <div className="pt-10 flex flex-row gap-5 pb-8 justify-center lg:justify-start">
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