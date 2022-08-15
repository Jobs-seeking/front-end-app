import React from 'react';
import Input from "../core-ui/Input";
import Button from "../core-ui/Button";

export default function Recruiter() {
    return (
      <div className="recruiter">

        <div className="recruiter__header">
          <div className="recruiter__intro">
            <div className="recruiter__intro__bigText">Create your job!</div>
            <div className="recruiter__intro__smallText">Post a Job</div>
          </div>
        </div>

        <form className="recruiter__form" action="">

          <div className="input-field">
            <label htmlFor="job-title"></label>
            <Input type="text" name="job-title" placeholder="Job title"/>
          </div>

          <select className='input-field'>
              <option value="0">Position</option>
              <option value="1">Mobile</option>
              <option value="2">Testing</option>
              <option value="3">Front end</option>
              <option value="4">Back end</option>
              <option value="5">Full Stack </option>
              <option value="6">BA</option>
          </select>

          <div className="input-field" id={"input-field-3"}>
            <label htmlFor=""></label>
            <textarea name="job-title" placeholder="Description"/>
          </div>

          <div className="input-field">
            <label htmlFor="salary"></label>
            <Input type="text" name="salary" placeholder="Salary"/>
          </div>

          <div className="input-field">
            <label htmlFor="required"></label>
            <Input type="text" name="required" placeholder="Required"/>
          </div>

          <div className="input-field">
            <label htmlFor="technicals"></label>
            <Input type="text" name="technicals" placeholder="Technicals"/>
          </div>

          <div className="input-field">
            <label htmlFor="date-expired"></label>
            <Input type="date" name="date-expired" placeholder="Date Expired"/>
          </div>
          <div className="btn__post"><Button> Post </Button>
          </div>
        </form>

      </div>
    )
}