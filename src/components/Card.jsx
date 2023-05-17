import React from "react";
import "../styles/Card.css";
import {
  AiOutlineEllipsis,
  AiOutlineEye,
  AiOutlineShareAlt,
} from "react-icons/ai";


const Card = ({ elem }) => {
  return (
    <div className="card mx-md-4 my-2 mx-sm-0 w-md-75" style={{ borderRadius: "5px" }}>
      <img src={elem.img} alt="" height={300} style={{ borderRadius: "5px" }} />
      <div className="p-2">
        <p>{elem.category}</p>
        <div className="d-flex justify-content-between">
          <b className="w-75">{elem.heading}</b>
          <AiOutlineEllipsis size={30} className="mx-3" />
        </div>
        <p className="text-secondary fs-6 my-3">{elem.sub}</p>
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={elem.profile}
              alt=""
              width={40}
              height={40}
              className="rounded-circle"
            />
            <b className="mx-2">{elem.profileName}</b>
          </div>
          <div className="d-flex align-items-center">
            <div className="views mx-3">
              <AiOutlineEye />
              {elem.views} views
            </div>
            <AiOutlineShareAlt className="mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
