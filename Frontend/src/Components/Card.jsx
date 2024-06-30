import React from "react"



const Card = () => {
    return (

        <div className="w-[23vw] h-[35vw] bg-zinc-900 rounded-xl">

            <div className="w-full min-h-[36vw]">

                <div className="w-full h-[30vh] rounded-tl-xl rounded-tr-xl bg-red-500">
                    <img className="w-full h-full object-cover object-center rounded-tl-xl rounded-tr-xl" src="/car.jpg" alt="" />
                </div>

                <div className="w-full flex flex-col justify-center gap-[.5vw] px-8 mt-4">
                    <h1 className="text-2xl text-zinc-300">Chemistry: CBSE</h1>
                    <p className="text-zinc-600 border-b-[1px] border-zinc-700 pb-20">Dominate CBSE with this course</p>
                </div>

                <div className="w-full h-[10vh] bg-zinc-800 mt-10 flex items-center justify-between px-10">

                    <div className="flex items-center gap-1">
                        <h1>By</h1>
                        <h1 className="text-xl">S.K Dubey</h1>
                    </div>

                    <div className="flex items-center">
                        <h1 className="text-xl">₹2000</h1>
                    </div>

                </div>

            </div>

            <div>
                <button className="w-full bg-amber-400 py-3 rounded-lg text-3xl text-black font-semibold">Buy Now</button>
            </div>

        </div>
    )
}
export default Card