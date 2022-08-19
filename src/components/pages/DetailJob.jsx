import React from "react";
import Button from "../core-ui/Button";
import { ImLocation2 } from "react-icons/im";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCalendarDayFill } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { COMPANIES_API, JOBS_API } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";
const JobDetail = () => {
  let { id } = useParams();
  const userInfo = SessionHelper.getUserInfo();
  const [detailJob, setDetailJob] = useState(null);
  const [companies, setCompanies] = useState([]);
  const getData = () => {
    axios
      .get(JOBS_API + `${id}`)
      .then((res) => {
        setDetailJob(res.data);
      })
      .catch((error) => console.log(error));
    axios.get(COMPANIES_API).then((res) => {
      setCompanies(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="jobDetail__page">
      {detailJob ? (
        <div className="jobDetail__page--container">
          <div className="jobDetail__page--top">
            <div className="jobDetail__name">
              <h3>{detailJob.jobDetail.title}</h3>
            </div>
            <div className="jobDetail__btn">
              <Link to={`/apply/${detailJob.id}`}>
                {userInfo.role !== "company" ? <Button>Apply</Button> : null}
              </Link>
            </div>
          </div>
          <div className="jobDetail__page--center">
            <div className="jobDetail__detail">
              <div className="jobDetail__technical">
                {detailJob.jobDetail.technical.split(", ").map((tech, index) => {
                  return <p key={index}>{tech}</p>;
                })}
              </div>
              <div className="jobDetail__address">
                <ImLocation2 className="icon" />
                <p>
                  {companies
                    .filter((cpn) => cpn.id === detailJob.companyId)
                    .map((filted) => {
                      return filted.address;
                    })}
                </p>
              </div>
              <div className="jobDetail__address">
                <RiMoneyDollarCircleLine className="icon" />
                <p>{detailJob.jobDetail.salary}</p>
              </div>
              <div className="jobDetail__datePost">
                <BsCalendarDayFill className="icon" />
                <p>{detailJob.jobDetail.deadline}</p>
              </div>
            </div>
            <div className="jobDetail__logo">
              <div className="jobDetail__logo__desc">
                <h2 className="jobDetail__logo__desc--top">
                  {companies
                    .filter((cpn) => cpn.id === detailJob.companyId)
                    .map((filted) => {
                      return filted.name;
                    })}
                </h2>
                <div className="jobDetail__logo__desc--bottom">
                  <span className="jobDetail__logo__desc--bottom__title">
                    Company description:
                  </span>{" "}
                  <br />
                  {companies
                    .filter((cpn) => cpn.id === detailJob.companyId)
                    .map((filted) => {
                      return filted.description;
                    })}
                </div>
              </div>
              <img
                src={companies
                  .filter((cpn) => cpn.id === detailJob.companyId)
                  .map((filted) => {
                    return filted.image;
                  })}
                alt=""
              />
            </div>
          </div>
          <div className="jobDetail__page--bottom">
            <div className="jobDetail--bottom--description">
              <h3>Description</h3>
              <p>{detailJob.jobDetail.description}</p>
            </div>
            <div className="jobDetail--bottom--required">
              <h3>Required</h3>
              <ul>
                <li>{detailJob.jobDetail.required}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};
export default JobDetail;
