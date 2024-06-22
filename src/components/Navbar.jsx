import React from "react";
import logo from "../assets/images/web-logo.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 flex justify-between p-4">
      <div className="flex">
        <Link to = "/"><img src={logo} alt="logo" className="w-8 h-8" /></Link>
        <h1 className="text-white text-2xl ml-2">Your News</h1>
      </div>

      <div className="flex  mr-6">
        <a href="https://github.com/abhishek8094">
          <FaGithubSquare className="m-1 text-2xl text-white" />
        </a>
        <a href="https://www.linkedin.com/in/abhishek8094/">
          {" "}
          <FaLinkedin className="m-1 text-2xl  text-white" />
        </a>
        <a href="https://x.com/ABHISHE75878889?t=kZfWtROa1Z4D_w3OCWWN1g&s=09">
          <FaSquareTwitter className="m-1 text-2xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
