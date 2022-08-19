
import React from "react";
import CompanyProfileInfor from "../core-ui/Profile/CompanyProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { JOBS_API } from "../../utils/constants";
import JobItem from "../containers/jobItem";

export default function CompanyProfile({ companyProfile }) {
  const [jobs, setJobs] = useState([])
  // const []
  const getData = async () => {
    const jobs = (await axios.get(JOBS_API, { params: { companyId: companyProfile.id } })).data; // should use Laravel api for searching
    setJobs(jobs)
  }
  useEffect(() => {
    getData()
  }, [])
  // const jobCompany = jobs.filter(job => job.companyId == companyProfile.id);
  // console.log(jobCompany);
  // console.log(companyProfile);
  const clickJobHandler = () => {

  }
  return (
    <div className="company-profile">
      <div className="company-profile-banner"></div>
      <div className="company-profile-title">
        <CompanyProfileInfor data={companyProfile} />
      </div>
      <div className="company__content">
        <div className="company__about">
          <h3>About</h3>
          <div className="company__about--detail">
            <p>{companyProfile.description}</p>
          </div>
        </div>
        <div className="company-profile-job">
          <div className="company-profile-job-list">
            <span>All Jobs</span>
            <div className="jobs__list">
              {jobs.map(ele => <JobItem key={ele.id}data={ele}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
