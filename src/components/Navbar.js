"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
      <div className="max-w-screen-x1 mx-auto flex justify-between items-center md:py-8 py-5 framer-animation">
        {/* logo*/}
        <div className="flex items-center space-x-2"> 
           <div className="w-8 h-0.5 bg-white" ></div>
           <Link href="/" className="text-lg font-semibold">Shamim Salaudin</Link>
        </div>
        {/* Desktop Navigation*/}
        <div>
            <p className="text-[#86868D] hidden md:block">I&apos;m a budding Entrepreneur / Innovator and Full Stack Developer based on Tamil Nadu </p>
        </div>

        <div className="hidden md:flex items-center space-x-6 font-semibold">
            <Link href="#Projects" className="hover:underline hover:text-gray-400">Projetcs</Link>
            <Link href="#Experience" className="hover:underline hover:text-gray-400">Experience</Link>
            <Link href="#Hireme" className="hover:underline hover:text-gray-400">Hire Me</Link>
        </div>

        {/* Appoinemnt booking */}
        <div className="hidden md:flex relative items-center justify-end">
            <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in">Book Appointment</button>
        </div>
        {/* Mobile menu Icon - navbar burger menu */}
        <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-2xl">
                {
                    isDrawerOpen ? <FiX />
                    : <FiMenu />
                }
            </button>
        </div>



      </div>
      {/* Mobile Drawer */}

      {
        isDrawerOpen && (
            <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg md:hidden">
                <p className="mb-4">
                    Full-Stack Developer & Entrepreneur <br/>
                    from Tamil Nadu, India.
                </p>

                <Link href="#Projects" className="black mb-4 hover:underline hover:text-gray-400">Projects</Link>
                <Link href="#Experience" className="black mb-4 hover:underline hover:text-gray-400">Experience</Link>
                <Link href="#Hireme" className="black mb-4 hover:underline hover:text-gray-400">Hire Me</Link>
                {/* Switch */}

            </div>
        )
      }
    </header>
  );
};

export default Navbar;
