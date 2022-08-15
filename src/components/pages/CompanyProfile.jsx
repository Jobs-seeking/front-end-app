
import BtnFollow from "../core-ui/Profile/BtnFollow";
import Details from "../core-ui/Profile/Details";
import Offeringjob from "../layouts/Joblistingg/Offeringjob";
// import Job from "../core-ui/Profile/Job";
import CompanyProfileInfor from "../core-ui/Profile/CompanyProfileInfor";
import { useEffect, useState } from "react";
import axios from "axios";
import { JOBS_API } from "../../utils/constants";


export default function CompanyProfile({companyProfile}) {
  const [jobs, setJobs] = useState([])
  const getData = async () => {
    const jobs = (await axios.get(JOBS_API, {companyId: companyProfile.id})).data.data; // should use Laravel api for searching
    setJobs(jobs)
  }
  // console.log(jobs);
  useEffect(() => {
    getData()  
  }, [])
  const clickJobHandler = () => {

  }
  return (
    <div className="company-profile">
      <div className="company-profile-banner"></div>
      <div className="company-profile-title">
        <CompanyProfileInfor data={companyProfile} />
        <BtnFollow companyId={companyProfile.id}/> {/* Follow who? what? should be haved a prop like companyId to know what company user will follow. */}
      </div>
      <div className="company-profile-job">
        <div className="company-profile-job-list">
          <span>All Jobs</span>
          {/* <Offeringjob data={jobs} onClickJob={clickJobHandler}/> */}
        </div>
        <div className="company-profile-job-details">
          <span className="span-Details">Details</span>
          <Details />
        </div>
      </div>
    </div>
  );
}
