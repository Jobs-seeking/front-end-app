import React from "react"
import AVT from "../../assets/images/avtb.png"
import Button from "../core-ui/Button"
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
const JobItem = ({data}) =>{
    return(
       <div className="job__item">
        <div className="jobItem__left">
            <div className="jobItem__left--img">
                <img src={data.image} alt="" />
            </div>
        </div>
        <div className="JobItem__mid">
            <div className="name__job JobItem__mid--item">
                <p>{data.title}</p>
            </div>
            <div className="location__job JobItem__mid--item">
            <MdLocationOn className="icon" /><p>Ha Noi</p>
            </div>
            <div className="language__job JobItem__mid--item">
                <p>{data.technical}</p>

            </div>
        </div>
        <div className="JobItem__right">
            <Link to={`/detail/${data.id}`}><Button >View Job</Button></Link>
        </div>
       </div> 
    )
}
export default JobItem