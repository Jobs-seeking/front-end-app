import { useEffect, useState } from "react";
import Offeringjob from "../layouts/Joblistingg/Offeringjob";
import Savingjob from "../layouts/Joblistingg/Savingjob";
import axios from "axios";
import Form from "../core-ui/Joblisting/Formmodel";
import { JOBS_API } from "../../utils/constants";
import JobItem from "./jobItem";

const OfferingJobContainer = ({data})=> {
  return (
    <div className="job-list__container">
    {data.map((jobs, index)=>{
        return (<JobItem dataItem={jobs} key={index} />);
    })}
    </div>
  );
}
export default OfferingJobContainer;