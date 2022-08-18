import { useEffect, useState } from "react";
import Offeringjob from "../layouts/Joblistingg/Offeringjob";
import Savingjob from "../layouts/Joblistingg/Savingjob";
import axios from "axios";
import Form from "../core-ui/Joblisting/Formmodel";
import { JOBS_API } from "../../utils/constants";

const OfferingJobContainer = ({data})=> {
  const [detailJob, setDetailJob] = useState(0);
  const handleClick = (i) => {
    console.log(i);
  };
  return (
    <div className="container-components">
      <div className="offering-part">
        {data ? (
          <Offeringjob
            onClickJob={handleClick}
            data={data}
          ></Offeringjob>
        ) : (
          "loading..."
        )}
      </div>
      <div className="lef-component">
        {data ? (
          <Savingjob data={data}></Savingjob>
        ) : (
          "loading..."
        )}
      </div>
      <div className="model-form">
        <Form data={data}></Form>
      </div>
    </div>
  );
}
export default OfferingJobContainer;
