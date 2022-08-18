import axios from "axios";
import React, { useEffect, useState } from "react";
import { COMPANIES_API } from "../../../utils/constants";
import Avatar from ".//../../core-ui/Joblisting/Avatar";
import Tab from ".//../../core-ui/Joblisting/Tab";

const Offeringjob = ({ data, onClickJob }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios.get(COMPANIES_API).then((res) => {
      setCompanies(res.data);
    });
  }, []);
  // console.log(data);
  return (
    <div>
      {data.map((job, index) => {
        return (
          <div
            className="information"
            key={index}
            onClick={() => {
              onClickJob(job.id);
            }}
          >
            <div className="detailImage">
              <Avatar
                imagejob={companies
                  .filter((cpn) => cpn.id === job.companyId)
                  .map((filted) => {
                    return filted.image;
                  })}
              ></Avatar>
            </div>
            <div className="detailImage">
              <p className="name-title">{job.title}</p>
              <Tab location={job.address} salaryjob={job.salary}></Tab>
              <p className="time-posting">{job.deadline}</p>
              <div className="content-recruiment">
                {job.briefjob}
                <button
                  type="button"
                  className="btn-des btn-info "
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => {
                    onClickJob(job.id);
                  }}
                >
                  See description
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Offeringjob;
