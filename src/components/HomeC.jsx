import React from "react";
import "../styles/HomeC.css";
import Card from "./Card";
import { AiFillEdit, AiFillEnvironment, AiFillInfoCircle } from "react-icons/ai";
import data from "../config/data";

const HomeC = () => {
  return (
    <>
      <img src="/bg.jpg" alt="" className="w-100 h-100" style={{width : "100vw"}}/>
      <div className="container-md">
      <div className="banner_text text-white">
        <h3 className="banner_main">Computer Enginnering</h3>
        <p>142,765 Computer Engineers follow this</p>
      </div>
      <div className="d-md-flex justify-content-between mainList w-100">
        <ul className="d-flex list">
          <li style={{paddingLeft : "0px"}}>All Posts(32)</li>
          <li>Articles</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="post">
          <button className="btn mx-3">Write a Post</button>
          <button className="btn btn-primary">Join Group</button>
        </div>
      </div>
      <div className="d-flex">
        <div className="d-flex flex-column w-md-75 w-sm-100 align-content-start cardItems">
      {data.map((elem)=>{
        return <Card elem = {elem}/>
      })}
        </div>
        <div className="location w-25 my-4">
          <AiFillEnvironment/>
          <input type="text" name="" id="" className="p-1" placeholder="Noida, India"/>
          <div className="text-secondary my-5">
            <AiFillInfoCircle/> Your location will help us serve better and extend a personalized experience
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeC;
