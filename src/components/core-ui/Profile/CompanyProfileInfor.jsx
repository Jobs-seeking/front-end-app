import { MdLocationOn } from "react-icons/md";

export default function CompanyProfileInfor() {
  return (
    <div className="company-profile-infor">
      <div className="company-profile-infor__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="company-profile-infor__right">
        <h4>Passerelles numériques</h4>
        <p>IT company</p>
        <p>
          <MdLocationOn className="icon" /> Da Nang
        </p>
      </div>
    </div>
  );
}
