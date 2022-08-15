import React from "react";
import Avatar from ".//../../core-ui/Joblisting/Avatar";
import Tab from ".//../../core-ui/Joblisting/Tab";
import Form from "../../core-ui/Joblisting/Formmodel";

const Offeringjob = ({ data, onClickJob }) => {
  return (
    <div>
      {data.map((job, index) => {
        console.log(job);
        return (
          <div className="information">
            <div className="detailImage">
              <Avatar imagejob={job.image}></Avatar>
            </div>
            <div className="detailTitle">
              <p
                onClick={() => {
                  onClickJob(index);
                }}
              >
                {job.jobDetail.title}
              </p>
              <Tab location={job.location} salaryjob={job.salaryjob}></Tab>
              <p className="time-posting">{job.timepostjob}</p>
              <div className="content-recruiment">
                {job.briefjob}
                <div className="model-form">
                  <Form></Form>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Offeringjob;
