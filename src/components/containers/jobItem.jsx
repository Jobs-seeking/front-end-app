import React from "react"
import AVT from "../../assets/images/avtb.png"
import Button from "../core-ui/Button"
import { MdLocationOn } from "react-icons/md";
const JobItem = ({data}) =>{
    console.log(data.jobDetail);
    return(
       <div className="job__item">
        <div className="jobItem__left">
            <div className="jobItem__left--img">
                <img src={data.jobDetail.image} alt="" />
            </div>
        </div>
        <div className="JobItem__mid">
            <div className="name__job JobItem__mid--item">
                <p>{data.jobDetail.title}</p>
            </div>
            <div className="location__job JobItem__mid--item">
            <MdLocationOn className="icon" /><p>Ha Noi</p>
            </div>
            <div className="language__job JobItem__mid--item">
                <p>{data.jobDetail.technical}</p>

            </div>
        </div>
        <div className="JobItem__right">
            <Button >View Job</Button>
        </div>
       </div> 
    )
}
export default JobItem