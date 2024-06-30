import React, { useEffect, useState } from "react"


const Nav = () => {

    // State variables to manage scroll behavior
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [top, setTop] = useState(0);
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setTop(0); // Show navbar
            } else {
                setTop(-100); // Hide navbar
            }
            setPrevScrollpos(currentScrollPos);
        };
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollpos]);

    const navbarStyle = {
        top: `${top}px`,
        width: '100%',
        transition: 'top 0.3s',
      };

    // Array of navTexts
    const navText = ["Home", "About Us", "Free Tests", "Our Team", "Contact Us"];

    return (
        <div className="fixed top:[{top}px] z-[1] w-full h-[6vw] flex justify-between items-center px-20 backdrop-blur-sm" style={navbarStyle}>

            <div className="logo flex gap-2">

                <div className="main-logo w-[3vw] h-[3vw] bg-amber-400 rounded-full">
                    <img src="../public/photo.png" alt="noimg" />
                </div>
                <h1 className="logo-text font-bold text-2xl flex items-center">Chemistry Sage</h1>

            </div>


            {/* The navTexts */}
            <div className="logo-text flex items-center gap-6">

                {navText.map((val) => {
                    return (
                        <a href="" className="">{val}</a>
                    )
                })}

                <button className="font-semibold bg-amber-400 text-black px-5 py-2 rounded-md ml-6">Sign In</button>

            </div>

        </div>
    )
}
export default Nav