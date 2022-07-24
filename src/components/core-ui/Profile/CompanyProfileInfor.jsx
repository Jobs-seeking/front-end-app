import { MdLocationOn } from "react-icons/md";

export default function CompanyProfileInfor() {
  return (
    <div className="company-profile-infor">
      <div className="company-profile-infor__left">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="company-profile-infor__right">
        <h4>Passerelles numériques</h4>
        <p>IT company</p>
        <p>
          <MdLocationOn className="icon"/> Da Nang
        </p>
      </div>
    </div>
  );
}
