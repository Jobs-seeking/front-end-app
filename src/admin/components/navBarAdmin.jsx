import {Link} from "react-router-dom";

const navBarAdmin = () => {
  return (
    <nav className= 'nav'>
      <ul className= 'nav_list'>
        <li className= "nav_item">
          <Link className= "nav_link" to={'dashboard'} > <span>Dashboard</span> </Link>
        </li>
        <li className= "nav_item">
          <Link className= "nav_link" to={'job'} > <span>Job</span> </Link>
        </li>
        <li className= "nav_item">
          <Link  className= "nav_link" to={'student'} > <span>Student</span> </Link>
        </li>
        <li className= "nav_item">
          <Link  className= "nav_link" to={'company'} > <span>company</span> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default navBarAdmin;