import { useState } from "react";
import Applied from "./Applied";


export default function AppliedJobs() {
  const [checkShow, setCheckShow] = useState(false);
  const check = () => {
    if(checkShow) {
      setCheckShow(false)
    }else {
      setCheckShow(true)
    }
  }
    return (
      <div className="applied">
        <div className="applied-job">
          <div className="applied-job__left">
            <p>Applied Jobs</p>
            {!!checkShow && <Applied/>}
          <button className="btn" onClick={check}>{checkShow ? "See less" : "See more"}</button>
          </div>
          <p className="applied-job__right">30</p>
        </div>
      </div>
    );
}