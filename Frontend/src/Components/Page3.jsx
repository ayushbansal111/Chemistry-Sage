import React from "react"
import Card from "./Card"



const Page3 = () => {
    return (

        <div className="w-full min-h-screen flex flex-col gap-[5vw] mt-40 px-20">

            <div className="w-full">
                <h1 className="text-5xl">Courses Offered.</h1>
            </div>

            <div className="w-full flex gap-[2vw]">
                <Card />
                <Card />
            </div>

        </div>
    )
}
export default Page3