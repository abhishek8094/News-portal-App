import React from "react";
import logo from "../assets/images/web-logo.jpg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchBar from "../components/Searchbar";

const Navbar = () => {
  return (
    <div className="bg-blue-600 flex flex-col md:flex-row justify-between items-center p-4">
      <div className="flex items-center mb-4 md:mb-0">
        <Link to="/">
          <img src={logo} alt="logo" className="w-8 h-8" />
        </Link>
        <h1 className="text-white text-2xl ml-2">Your News</h1>
      </div>
      
      <div className="w-full md:w-auto md:flex-1 mb-4 md:mb-0">
        <SearchBar />
      </div>
      
      <div className="flex">
        <a href="https://github.com/abhishek8094" className="m-1 text-2xl text-white">
          <FaGithubSquare />
        </a>
        <a href="https://www.linkedin.com/in/abhishek8094/" className="m-1 text-2xl text-white">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ABHISHE75878889?t=kZfWtROa1Z4D_w3OCWWN1g&s=09" className="m-1 text-2xl text-white">
          <FaSquareTwitter />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
