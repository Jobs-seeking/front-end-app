import {useState, useEffect} from "react";
import axios from "axios";
import {JOBS_API} from "../../utils/constants";

const JobAdmin = () => {
  const [jobList, setJobList] = useState();

  useEffect(() => {
    axios.get(`${JOBS_API}`).then(res => {
      setJobList(res.data)
    })
  }, []);


  return (
    <div className = "admin_job">
      <h1 className = "admin_job_heading">Job</h1>
        <table className = "tbl" >
          <thead className = "tbl_header">
          <tr>
            <th>title</th>
            <th>technical</th>
            <th>salary</th>
            <th>description</th>
            <th>required</th>
            <th>deadline</th>
            <th>address</th>
          </tr>
          </thead>
          <tbody className = "tbl_body">
          {!!jobList ? jobList.map(job =>
            (<tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.technical}</td>
              <td>{job.salary}</td>
              <td>{job.description}</td>
              <td>{job.required}</td>
              <td>{job.deadline}</td>
              <td>{job.address}</td>
            </tr>
            ))
            :
            ""
          }
          </tbody>
        </table>
    </div>
  )
}

export default JobAdmin;