import React from "react";
import { FcGlobe } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo.jpg" alt="" width={120}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">     
        <div className="d-md-flex justify-content-between w-100">    
          <div className="search p-1 rounded-pill d-flex align-items-center">
          <AiOutlineSearch size={20}/>
            <input placeholder="Search for your favourite groups in ATG" type="text" name="" id="" className=" mx-2 rounded-pill input-search" style={{outline : "none",border : "none"}}/>
          </div>
          <div className="">Create Account. <span className="text-primary">It's free</span></div>
          </div>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
