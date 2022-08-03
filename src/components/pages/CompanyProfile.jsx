
import BtnFollow from "../core-ui/Profile/BtnFollow";
import Details from "../core-ui/Profile/Details";
import Job from "../core-ui/Profile/Job";
import CompanyProfileInfor from "../core-ui/Profile/CompanyProfileInfor";

export default function CompanyProfile() {
  return (
    <div className="company-profile">
      <div className="company-profile-banner"></div>
      <div className="company-profile-title">
        <CompanyProfileInfor />
        <BtnFollow />
      </div>
      <div className="company-profile-job">
        <div className="company-profile-job-list">
          <span>All Jobs</span>
          <Job></Job>
          <Job></Job>
          <Job></Job>
        </div>
        <Details></Details>
      </div>
    </div>
  );
}
