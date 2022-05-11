import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Clock from "./Clock";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="shadow-md shadow-[#040c16] fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-textl">
            <div className="flex flex-col">
                <h1 className="font-serif verdana text-3xl ">Axel Racca</h1>
                {/* <Clock /> */}
            </div>
            {/* menu */}
            <ul className="hidden md:flex">
                <li className="hover:scale-110">
                    <Link
                        className="hover:text-rose"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="hover:scale-110">
                    <Link
                        className="hover:text-rose"
                        to="profile"
                        smooth={true}
                        duration={500}
                    >
                        Profile
                    </Link>
                </li>
                <li className="hover:scale-110">
                    <Link
                        className="hover:text-rose"
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="hover:scale-110">
                    <Link
                        className="hover:text-rose"
                        to="education"
                        smooth={true}
                        duration={500}
                    >
                        Education
                    </Link>
                </li>
                <li className="hover:scale-110">
                    <Link
                        className="hover:text-rose"
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            {/* hamburguesa */}
            <div onClick={handleClick} className="md:hidden z-10 hover:scale-110">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* menu movil */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl hover:scale-110">
                    <Link
                        onClick={handleClick}
                        className="hover:text-rose"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:scale-110">
                    <Link
                        onClick={handleClick}
                        className="hover:text-rose"
                        to="profile"
                        smooth={true}
                        duration={500}
                    >
                        Profile
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:scale-110">
                    <Link
                        onClick={handleClick}
                        className="hover:text-rose"
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:scale-110">
                    <Link
                        onClick={handleClick}
                        className="hover:text-rose"
                        to="education"
                        smooth={true}
                        duration={500}
                    >
                        Education
                    </Link>
                </li>
                <li className="py-6 text-4xl hover:scale-110">
                    <Link
                        onClick={handleClick}
                        className="hover:text-rose"
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* iconos */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/axel-racca-8184b5226/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/Dralier"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto: axel.racca@gmail.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
