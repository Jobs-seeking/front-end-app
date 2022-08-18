import React from "react";
import Button from "../core-ui/Button";
import { ImLocation2 } from 'react-icons/im';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsCalendarDayFill } from 'react-icons/bs';
import axios from "axios";
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { JOBS_API } from "../../utils/constants";
const JobDetail = () => {
    let { id } = useParams();
    const [detailJob, setDetailJob] = useState(null);
    const getData = () => {
        axios.get(JOBS_API + `${id}`)
            .then((res) => {
                setDetailJob(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="jobDetail__page">
            {detailJob ? <div className="jobDetail__page--container">
            <div className="jobDetail__page--top">
                <div className="jobDetail__name">
                    <h3>{detailJob.jobDetail.title}</h3>
                </div>
                <div className="jobDetail__btn">
                    <Button>Apply</Button>
                </div>
            </div>
            <div className="jobDetail__page--center">
                <div className="jobDetail__detail">
                    <div className="jobDetail__technical">
                        <p>{detailJob.jobDetail.technical}</p>
                        <p>CSS</p>
                        <p>Javascript</p>

                    </div>
                    <div className="jobDetail__address">
                        <ImLocation2 className="icon"/>
                        <p>19 Nguyen Tat Thanh, Son Tra, DaNang City</p>
                    </div>
                    <div className="jobDetail__address">
                        <RiMoneyDollarCircleLine className="icon"/>
                        <p>{detailJob.jobDetail.salary}</p>
                        
                    </div>
                    <div className="jobDetail__datePost">
                        <BsCalendarDayFill className="icon"/>
                        <p>{detailJob.jobDetail.deadline}</p>
                    </div>

                </div>
            </div>
            <div className="jobDetail__page--bottom">
                <div className="jobDetail--bottom--description">
                    <h3>Job Description</h3>
                    <p>{detailJob.jobDetail.description}</p>
                </div>
                <div className="jobDetail--bottom--required">
                    <h3>Your Skill</h3>
                    <ul>
                        <li>
                        {detailJob.jobDetail.required}
                        </li>
                    </ul>
                </div>
            </div>
        </div>: "loading..."}
        
    </div>
    )

}
export default JobDetail;