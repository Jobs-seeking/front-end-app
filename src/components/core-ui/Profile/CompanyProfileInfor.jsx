import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function CompanyProfileInfor( {data} ) {
  return (
    <div className="company-profile-infor">
      <div className="company-profile-infor__left">
        <img
          src={data.img}
          alt=""
        />
      </div>
      <div className="company-profile-infor__right">
        <h4>{data.name}</h4>
        <p>{data.field}</p>
        <p>
          <MdLocationOn className="icon" /> {data.address}
        </p>
      </div>
    </div>
  );
}
