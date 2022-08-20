import {useEffect, useState} from "react";
import axios from "axios";
import {COMPANIES_API, STUDENT_API} from "../../utils/constants";

const CompanyAdmin = () => {

  const [companyList, setCompanyList] = useState();

  useEffect(() => {
    axios.get(`${COMPANIES_API}`).then(res => {
      setCompanyList(res.data)
    })
  }, []);
  return (
    <div className = "admin_company">
      <h1 className = "admin_company_heading">Company</h1>
      <table className = "tbl" >
        <thead className = "tbl_header">
        <tr>
          <th>email</th>
          <th>name</th>
          <th>phone</th>
          <th>description</th>
          <th>address</th>
          <th>Avatar</th>
          <th>status</th>
        </tr>
        </thead>
        <tbody className = "tbl_body">
        {!!companyList ? companyList.map(company =>
            (<tr key={company.id}>
                <td>{company.email}</td>
                <td>{company.name}</td>
                <td>{company.phone}</td>
                <td>{company.description}</td>
                <td>{company.address}</td>
                <td><img className = "tbl_body_img" src = {company.image} alt={"hi"} role = "presentation" /></td>
                <td><input type = "checkbox" defaultChecked = {company.status === "active" ? "checked" : ""}/></td>
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

export default CompanyAdmin;