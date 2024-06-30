import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";



const Page1 = () => {
    return (

        <div className="relative w-full h-screen flex flex-col justify-center items-center">

            {/* The paragraph */}
            <div className="paras absolute right-[16vw] top-[27vw] text-[.9vw]">

                <div className="flex gap-[.4vw]">
                    <p>It’s finally the time to</p>
                    <p className="text-amber-400">earn through</p>
                </div>
                <div className="flex gap-[.4vw]">
                    <p className="text-amber-400">what you love the most.</p>
                    <p>Join our</p>
                </div>
                <p>weekly, monthly, and quarterly workshops</p>
                <p>to get started with your musical journey.</p>

            </div>

            {/* The arrow pointing downwards */}
            <div className="absolute left-[2vw] bottom-[2vw] hover:bg-amber-400 p-3 rounded-full">
                <FaLongArrowAltDown style={{width: "1.5vw", height: "1.5vw"}} />
            </div>

            {/* The gooey effect */}
            <div className="absolute top-[-8vw] z-0 w-full h-[30vh] flex justify-center gap-[12vw]">
                <div className="w-[10vw] h-[15vw] rounded-sm rotate-45 bg-amber-400 blur-3xl"></div>
                {/* <div className="w-[20vw] h-[20vh] rounded-full bg-amber-400 blur-3xl"></div> */}
                <div className="w-[8vw] h-[10vw] rounded-md bg-amber-400 blur-3xl"></div>
            </div>

            {/* The main text along with check courses button */}
            <div className="flex flex-col items-center justify-center gap-8 mt-20 mb-24">

                <div className="paras text-center text-8xl">
                    <p>Join to</p>
                    <div className="flex justify-center items-center gap-[1vw]">
                        <p>become a</p>
                        <p className="text-amber-400">ranker</p>
                    </div>

                    <div className="flex items-center justify-center gap-[1vw]">
                        <p>in</p>
                        <p className="font-extralight italic">chemistry.</p>
                    </div>
                </div>

                <div>
                    <button className="bg-amber-400 px-8 py-2 text-black font-semibold rounded-lg">Check Courses</button>
                </div>

            </div>

            {/* The info about students taught, subs, etc */}
            <div className="flex justify-center items-center gap-[5vw]">

                <div className="flex flex-col items-center text-2xl">
                    <h1 className="font-bold">10K+</h1>
                    <h1>Students Taught</h1>
                </div>

                <div className="flex flex-col items-center text-2xl">
                    <h1 className="font-bold">9+</h1>
                    <h1>Instructors</h1>
                </div>

                <div className="flex flex-col items-center text-2xl">
                    <h1 className="font-bold">5K+</h1>
                    <h1>Youtube Subs.</h1>
                </div>

            </div>

        </div>
    )
}
export default Page1