
import BtnFollow from "../core-ui/Profile/BtnFollow";
import Details from "../core-ui/Profile/Details";
import Offeringjob from "../layouts/Joblistingg/Offeringjob";
// import Job from "../core-ui/Profile/Job";
import CompanyProfileInfor from "../core-ui/Profile/CompanyProfileInfor";
import Savingjob from "../layouts/Joblistingg/Savingjob";
import { useEffect, useState } from "react";
import axios from "axios";
import { COMPANIES_API, JOBS_API } from "../../utils/constants";


export default function CompanyProfile( {companyId} ) {
  // const [jobs, setJobs] = useState([])
  const [data, setData] = useState({
    jobs: [],
    comInfo: null
  })
  const getData = async () => {
    const jobs = (await axios.get(JOBS_API)).data.data.filter(job => job.comId === companyId); // should use Laravel api for searching
    const comInfo = (await axios.get(COMPANIES_API + companyId)) // get company's infomation
    setData({jobs, comInfo})
  }
  useEffect(() => {
    getData()
  }, [])
  const clickJobHandler = () => {

  }
  return (
    <div className="company-profile">
      <div className="company-profile-banner"></div>
      <div className="company-profile-title">
        <CompanyProfileInfor data={data.comInfo} />
        <BtnFollow companyId={companyId}/> {/* Follow who? what? should be haved a prop like companyId to know what company user will follow. */}
      </div>
      <div className="company-profile-job">
        <div className="company-profile-job-list">
          <span>All Jobs</span>
          <Offeringjob data={data.jobs} onClickJob={clickJobHandler}/>
        </div>
        <div className="company-profile-job-details">
          <span className="span-Details">Details</span>
          <Details />
        </div>
      </div>
    </div>
  );
}
