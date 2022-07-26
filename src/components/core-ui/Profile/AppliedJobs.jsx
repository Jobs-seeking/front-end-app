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
            <h4 style={{display:"flex"}}>Applied Jobs <span className="applied-job__right">30</span> </h4>
            {!!checkShow && <Applied />}
            <button className="btn--solid" onClick={check}>
              {checkShow ? "See less" : "See more"}
            </button>
          </div>
        </div>
      </div>
    );
}