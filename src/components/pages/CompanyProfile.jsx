
import BtnFollow from "../core-ui/Profile/BtnFollow";
import Details from "../core-ui/Profile/Details";
import Offeringjob from "../layouts/Joblistingg/Offeringjob";
// import Job from "../core-ui/Profile/Job";
import CompanyProfileInfor from "../core-ui/Profile/CompanyProfileInfor";
import Savingjob from "../layouts/Joblistingg/Savingjob";
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
          <Offeringjob />
          <Offeringjob />
          <Offeringjob />
        </div>
        <div className="company-profile-job-details">
          <span className="span-Details">Details</span>
          <Details />
        </div>
      </div>
    </div>
  );
}
