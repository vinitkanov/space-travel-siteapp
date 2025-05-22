'use client'

import { useState } from "react";

const techList = [
    {
        name: "Launch Vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image: "/tech-1.png"
    },
    {
        name: "Spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: "/tech-2.png"
    },
    {
        name: "Space Capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: "/tech-3.png"
    }
]


export default function Technology() {

    const [activeContent, setActiveContent] = useState(0)

    return(
        <section>
            <div className="gap-2 flex flex-row items-center justify-center-safe  md:justify-start lg:hidden">
                <h1 className="uppercase text-sm tracking-widest text-center lg:text-left text-gray-500">03</h1>
                <h1>SPACE LAUNCH 101</h1>
            </div>

            <div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <img src={techList[activeContent].image} alt="img" className="flex" />
                </div>
                <div className="pt-10 flex flex-row gap-5 pb-8 justify-center lg:justify-start lg:hidden">
                    {techList.map((tech, index) => {
                        return (
                            <button
                                className="w-4 h-4 rounded border-white bg-transparent cursor-pointer"
                                key={index}
                                onClick={() => setActiveContent(index)}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                </div>  

                <div>
                    <h1 className="uppercase text-xl tracking-widest pb-2">
                        {/* Removed .role, since it doesn't exist */}
                    </h1>
                    <h1 className="text-4xl">{techList[activeContent].name}</h1>
                    <p className="text-sm max-w-md text-blue-200">{techList[activeContent].description}</p>
                </div>
            </div>
        </section>
    )
}