import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Destinations</li>
        <li className="cursor-pointer">Travel</li>
        <li className="cursor-pointer">View</li>
        <li className="cursor-pointer">Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2 cursor-pointer select-none" size={20} />
        <BsPerson className="cursor-pointer select-none" size={20} />
      </div>

      {/* Hamburger */}

      <div className="block md:hidden z-10" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="transition cursor-pointer select-none text-black" size={30} />
        ) : (
          <HiOutlineMenuAlt4 className="transition cursor-pointer select-none" size={30} />
        )}
      </div>

      {/* Mobile menu dropdown */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col duration-300"
            : "absolute left-[-100%] duration-300"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
