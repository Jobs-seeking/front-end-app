import { FaWallet, FaUserAlt, FaBuilding } from 'react-icons/fa';
import {Link} from "react-router-dom";
const DashBoard = () => {
  return (
    <div className= "dashboard">
      <div className="dashboard_welcome">
        <h2 className= "dashboard_welcome_heading">welcome to dashboard</h2>
        <p className="dashboard_welcome_content">Here is dashboard</p>
      </div>

      <div className= "dashboard_statistical_list">
          <Link to="/admin/job" className = "dashboard_statistical_item">
            <FaWallet className= "dashboard_statistical_icon" />

            <div className= "dashboard_statistical_content">
              <h2 className= "dashboard_statistical_heading">
                <span className= "dashboard_statistical_heading_number" >34</span>
                job
              </h2>
              <p className= "dashboard_statistical_body">job</p>
            </div>
          </Link>

        <Link to="/admin/student" className = "dashboard_statistical_item">
          <FaUserAlt className= "dashboard_statistical_icon" />

          <div className= "dashboard_statistical_content">
            <h2 className= "dashboard_statistical_heading">
              <span className= "dashboard_statistical_heading_number" >34</span>
              Student
            </h2>
            <p className= "dashboard_statistical_body">naruto</p>
          </div>
        </Link>

        <Link to="/admin/company" className= "dashboard_statistical_item">
          <FaBuilding className= "dashboard_statistical_icon" />

          <div className= "dashboard_statistical_content">
            <h2 className= "dashboard_statistical_heading">
              <span className= "dashboard_statistical_heading_number" >34</span>
              company
            </h2>
            <p className= "dashboard_statistical_body">naruto</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default DashBoard;