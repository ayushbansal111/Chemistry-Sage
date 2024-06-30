import React from "react"



const Page2 = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-[5vw]">

            {/* The top text */}
            <div className="flex flex-col justify-center items-center mt-32 text-5xl">
                <p>We do whatever it takes to help you</p>
                <p className="text-amber-400">understand the concepts.</p>
            </div>

            {/* iframe */}
            <div className="flex flex-col justify-center items-center gap-[1.5vw]">
                <iframe className="w-[55vw] h-[30vw] rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/yGBge2J38sw?si=KfIbDv1NRQSPZIBG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <div>
                    <button className="bg-amber-400 px-12 py-4 rounded-lg text-black font-semibold">Explore Free Resources</button>
                </div>
            </div>

        </div>
    )
}
export default Page2