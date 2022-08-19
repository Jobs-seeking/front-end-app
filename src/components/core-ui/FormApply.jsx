import Button from "./Button";

import { useEffect, useState } from "react";
import Input from "./Input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  APPLICANT_API,
  COMPANIES_API,
  JOBS_API,
  SEND_MAIL_EMPLOYEER,
  USERS_API_URL,
} from "../../utils/constants";
import SessionHelper from "../../utils/SessionHelper";
import {ToastContainer, toast, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// import Input from './Input';

const FormApply = () => {
  let { id } = useParams();

  const userInfo = SessionHelper.getUserInfo();
  const [company, setCompany] = useState({});

  if (userInfo.role === "company") {
    window.location = "/";
  }
  const [cvPreview, setCvPreview] = useState(null);
  const [info, setInfo] = useState({
    name: userInfo.name ?? "",
    phone: userInfo.phone ?? "",
  });
  const [applicant, setApplicant] = useState({});

  const onChangeInfo = (e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
          
          // Update user
          axios
            .put(USERS_API_URL + `${userInfo.id}`, info)
            .then((u) => {
              let request = {
                params: {
                  cv: res.data.cv,
                  cover_letter: res.data.cover_letter ?? "none",
                  student: u.data.name,
                  mailTo: company.email,
                  name: company.name,
                },
              };
              axios.get(SEND_MAIL_EMPLOYEER, request).then(()=>{
                toast.success("Applied successful! Please wait a minutes");
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
              })
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    axios.get(JOBS_API + `${id}`).then((res) => {
      axios.get(COMPANIES_API).then((cpn)=>{
        cpn.data.filter((f)=>{
            if(f.id===res.data.companyId){
                setCompany(f);
            }
        })
      })
    });
  }, []);
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
            value={info.name}
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
            value={info.phone}
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
      <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
    </div>
  );
};
export default FormApply;
