import NavBarAdmin from "../components/navBarAdmin";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="main_layout">
      <NavBarAdmin />
      <Outlet />
    </div>
  )
}

export default MainLayOut;