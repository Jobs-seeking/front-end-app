import React from "react";
import AVT from "../../assets/images/avtb.png";
import Button from "../core-ui/Button";
import { MdLocationOn } from "react-icons/md";

import { RiMoneyPoundCircleLine } from "react-icons/ri";
import {Link} from "react-router-dom";
const JobItem = ({ dataItem }) => {
    const viewJob = (id) =>{
        console.log("clmm view cc " + id);
    }
  return (
    <div className="job__item">
      <div className="jobItem__left">
        <div className="jobItem__left--img">
          <img src={dataItem.image} alt="" />
        </div>
      </div>
      <div className="JobItem__mid">
        <div className="name__job JobItem__mid--item">
          <p title={dataItem.title}>{dataItem.title}</p> 
          <p>{dataItem.job_type}</p> 
        </div>
        <div className="location__job JobItem__mid--item">
          <MdLocationOn className="icon" /> <p>{dataItem.address}</p>
        </div>
        <div className="location__job JobItem__mid--item">
          <RiMoneyPoundCircleLine className="icon" /> <p>{dataItem.salary}</p>
        </div>
        <div className="desc__job JobItem__mid--item">
          <p>{dataItem.description}</p>
        </div>
        <div className="language__job JobItem__mid--item">
          {dataItem.technical.split(", ").map((tech, index) => {
                  return <p key={index}>{tech}</p>;
                })}
        </div>
      </div>
      <div className="JobItem__right">
      <Link to={`/detail/${dataItem.id}`}><Button >View Job</Button></Link>
      </div>
    </div>
  );
};
export default JobItem;
