import React from 'react';
import Input from "../core-ui/Input";

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
            <Input type="text" name="job-title" placeholder="Job title 1"/>
          </div>

          <select className='input-field'>
              <option value="0">---Choose---</option>
              <option value="1">Mobile</option>
              <option value="2">Testing</option>
              <option value="3">Front end</option>
              <option value="4">Back end</option>
              <option value="5">Full Stack </option>
              <option value="6">BA</option>
          </select>

          <div className="input-field" id={"input-field-3"}>
            <label htmlFor=""></label>
            <textarea name="job-title" placeholder="hahahah"/>
          </div>

          <div className="input-field">
            <label htmlFor="job-title"></label>
            <Input type="text" name="job-title" placeholder="JOB TITLE"/>
          </div>

          <div className="input-field">
            <label htmlFor="job-title"></label>
            <Input type="text" name="job-title" placeholder="JOB TITLE"/>
          </div>

          <select className='input-field'>
            <option value="0">---Choose---</option>
            <option value="1">Mobile</option>
            <option value="2">Testing</option>
            <option value="3">Front end</option>
            <option value="4">Back end</option>
            <option value="5">Full Stack </option>
            <option value="6">BA</option>
          </select>

          <select className='input-field'>
            <option value="0">---Choose---</option>
            <option value="1">Mobile</option>
            <option value="2">Testing</option>
            <option value="3">Front end</option>
            <option value="4">Back end</option>
            <option value="5">Full Stack </option>
            <option value="6">BA</option>
          </select>
        </form>

      </div>
    )
}