import Button from "./Button";

import { useEffect, useState } from "react";
import Input from "./Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { APPLICANT_API } from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";

// import Input from './Input';

const FormApply = () => {
  let { id } = useParams();

  const userInfo = SessionHelper.getUserInfo();
  if (userInfo.role === "company") {
    window.location = "/";
  }
  const [cvPreview, setCvPreview] = useState(null);
  const [info, setInfo] = useState({});
  const [applicant, setApplicant] = useState({});

  const onChangeInfo = (e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(info);
  console.log(applicant);
  const handleSubmitFile = () => {
    if (applicant.cv !== null) {
      let formData = new FormData();
      formData.append("cover_letter", applicant.cover_letter);
      formData.append("job_id", id);
      formData.append("student_id", userInfo.id);
      formData.append("year_experience", applicant.year_experience);
      formData.append("cv", applicant.cv);
      axios
        .post(APPLICANT_API, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(`Success` + res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="formApply__container">
      <div className="formApply__input">
        <div className="formApply__input--text">
          <label htmlFor="name">Full name</label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={info.name ?? ""}
            onChange={onChangeInfo}
          />
        </div>
        <div className="formApply__input--text">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={info.email ?? ""}
            onChange={onChangeInfo}
          />
        </div>
        <div className="formApply__input--text">
          <label htmlFor="phone">Phone number</label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            value={info.phone ?? ""}
            onChange={onChangeInfo}
          />
        </div>
        <div className="formApply__input--text">
          <label htmlFor="year">Year experience</label>
          <Input
            type="text"
            name="year_experience"
            id="year"
            placeholder="Enter your year experience"
            value={applicant.year_experience ?? ""}
            onChange={(e) => {
              setApplicant((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        </div>
        <div className="formApply__input--control">
          <div className="formApply__input--control--group">
            <input
              className="formApply__input--file"
              type="file"
              name="cv"
              onChange={(e) => {
                setApplicant((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.files[0],
                }));
                setCvPreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <input
              className="formApply__input--file__cover-letter"
              type="file"
              name="cover_letter"
              onChange={(e) => {
                setApplicant((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.files[0],
                }));
              }}
            />
          </div>
          <input
            className="formApply__input--submit btn"
            type="submit"
            onClick={handleSubmitFile}
            value="Submit"
          />
        </div>
      </div>
      <div className="formApply__preview">
        {cvPreview ? (
          <embed src={cvPreview} width="100%" height="100%" />
        ) : (
          <>
            <p>Preview CV</p>{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/142/142336.png"
              width="120px"
              height="auto"
              style={{ objectFit: "cover" }}
              alt="preview"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default FormApply;
