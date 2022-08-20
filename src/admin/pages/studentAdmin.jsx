import {useEffect, useState} from "react";
import axios from "axios";
import {JOBS_API, STUDENT_API} from "../../utils/constants";

const StudentAdmin = () => {

  const [studentList, setStudentList] = useState();

  useEffect(() => {
    axios.get(`${STUDENT_API}`).then(res => {
      setStudentList(res.data)
    })
  }, []);
  return (
    <div className = "admin_student">
      <h1 className = "admin_student_heading">Student</h1>
      <table className = "tbl" >
        <thead className = "tbl_header">
        <tr>
          <th>email</th>
          <th>name</th>
          <th>dateOfBirth</th>
          <th>phone</th>
          <th>level</th>
          <th>description</th>
          <th>address</th>
          <th>Avatar</th>
          <th>status</th>
        </tr>
        </thead>
        <tbody className = "tbl_body">
        {!!studentList ? studentList.map(std =>
            (<tr key={std.id}>
                <td>{std.email}</td>
                <td>{std.name}</td>
                <td>{std.dateOfBirth}</td>
                <td>{std.phone}</td>
                <td>{std.level}</td>
                <td>{std.description}</td>
                <td>{std.address}</td>
                <td><img className = "tbl_body_img" src = {std.image} alt={"hi"} role = "presentation" /></td>
                <td><input type = "checkbox" defaultChecked = {std.status === "active" ? "checked" : ""}/></td>
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

export default StudentAdmin;