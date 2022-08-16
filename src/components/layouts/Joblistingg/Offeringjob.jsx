import React from "react";
import Avatar from ".//../../core-ui/Joblisting/Avatar";
import Tab from ".//../../core-ui/Joblisting/Tab";  

const Offeringjob = ({ data, onClickJob }) => {
  return (
    <div>
      {data.map((job, index) => {
        return (
          <div className="information" key={index}>
            <div className="detailImage">
              <Avatar imagejob={job.image}></Avatar>
            </div>
            <div className="detailImage">
              <p
                className="name-title"
                onClick={() => {
                  onClickJob(index);
                }}
              >
                {job.namejob}
              </p>
              <Tab location={job.location} salaryjob={job.salaryjob}></Tab>
              <p className="time-posting">{job.timepostjob}</p>
              <div className="content-recruiment">
                {job.briefjob}
                <div
                  type="button"
                  className="btn-des btn-info "
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => {
                    onClickJob(index);
                  }}
                >
                  See description
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
