import React from "react"
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (

        <div className="w-full min-h-[50vh]">
            
            {/* top */}
            <div className="w-full flex min-h-[10vh] border-t-[1px] border-t-zinc-700 border-b-[1px] border-b-zinc-700">

                {/* first part */}
                <div className="w-1/4 h-96 flex flex-col items-start justify-start px-20 py-10 gap-[.5vw]">

                    {/* The logo */}
                    <div className="main-logo w-[4vw] h-[4vw] bg-amber-400 rounded-full overflow-hidden">
                        <img src="../public/photo.png" alt="noimg" />
                    </div>

                    {/* Text */}
                    <div>
                        <h1 className="text-[1.4vw]">Connect with us</h1>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-2 text-[1.5vw]">
                        <AiFillInstagram />
                        <AiFillFacebook />
                        <AiFillYoutube />
                        <FaXTwitter />
                    </div>

                </div>

                {/* second part */}
                <div className="w-1/4 h-96 flex flex-col items-start justify-start px-20 py-10 gap-6">

                    <div className="flex justify-start">
                        <h1 className="text-xl font-semibold">COMPANY</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a href="">About Us</a>
                        <a href="">Support</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Prining & Refund</a>
                    </div>

                </div>

                {/* third part */}
                <div className="w-1/4 h-96 flex flex-col items-start justify-start px-20 py-10 gap-6">

                    <div className="flex justify-start">
                        <h1 className="text-xl font-semibold">COMMUNITY</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a href="">Telegram</a>
                        <a href="">Whatsapp</a>
                    </div>

                </div>

                {/* fourth part */}
                <div className="w-1/4 h-96 flex flex-col items-start justify-start px-20 py-10 gap-6">

                    <div className="flex justify-start">
                        <h1 className="text-xl font-semibold">GET IN TOUCH</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a href="">+91 9899522127</a>
                        <a href="">+91 8920907452</a>
                        <a href="">cs@mail.com</a>
                        <a href="">Spoken English Classes Indiranagar, Lane-50 Dist-Ahmednagar Maharashtra - 422605</a>
                    </div>

                </div>

            </div>

            {/* bottom */}
            <div className="w-full flex flex-col items-center justify-center mt-10 pb-5">
                <h1>Copyright © 2024 Chemistry Sage Pvt. Ltd.</h1>
                <h1>All Rights Reserved.</h1>
            </div>

        </div>
    )
}
export default Footer