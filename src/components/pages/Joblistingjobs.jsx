import Searchingjob from "../layouts/Joblistingg/Searchingjob";
import OfferingJobContainer from "../containers/OfferingJobContainer";
import { useEffect } from "react";
import { JOBS_API, SEARCH_JOB_API } from "../../utils/constants";
import axios from "axios";
import { useState } from "react";

const Joblistingjobs = () => {
  const [jobs, setJobs] = useState([]);

  const getData = () => {
    axios.get(JOBS_API).then((res) => {
      setJobs(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const search = (e) => {
    let request = {
      params: {
        technical: e.technical,
        location: e.location,
        min: e.min,
        max: e.max,
        title: e.title,
        type: e.type,
      },
    };
    axios.get(SEARCH_JOB_API, request).then((res) => {
      setJobs(res.data);
    });
  };
  return (
    <div className="overll-component">
      <Searchingjob data={jobs} searchHandle={search} />
      <OfferingJobContainer data={jobs} />
    </div>
  );
};

export default Joblistingjobs;
