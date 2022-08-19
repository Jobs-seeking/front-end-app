import {Link} from "react-router-dom";

const navBarAdmin = () => {
  return (
    <div className= 'admin_nav'>
      <ul className= 'admin_nav_list'>
        <li className= "admin_nav_item">
          <Link className= "admin_nav_link" to={'dashboard'} > <span>Dashboard</span> </Link>
        </li>
        <li className= "admin_nav_item">
          <Link className= "admin_nav_link" to={'job'} > <span>Job</span> </Link>
        </li>
        <li className= "admin_nav_item">
          <Link  className= "admin_nav_link" to={'student'} > <span>Student</span> </Link>
        </li>
        <li className= "admin_nav_item">
          <Link  className= "admin_nav_link" to={'company'} > <span>company</span> </Link>
        </li>
      </ul>
    </div>
  )
}

export default navBarAdmin;