import React from "react";
import Avatar from "../core-ui/Joblisting/Avatar";
import { IoMdArrowDropdown } from 'react-icons/io';
import SessionHelper from "../../utils/SessionHelper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NavAccount(props) {
    let navigate = useNavigate();
    const dropMenu = () => {
        var x = document.getElementById("nav-account__drop");
        if (x.className === "nav-account__drop") {
            x.classList.add("show");
        }
        else {
            x.classList.remove("show")
        }
    }
    const Logout = () =>{
        SessionHelper.removeUser();
        navigate('/')
    }
    return (
        <div className="nav-account">
            <div className="nav-account__img" onClick={dropMenu} >
                <img src={props.img} /><IoMdArrowDropdown className="nav-account__icon" />
            </div>
            <div className="nav-account__drop" id="nav-account__drop">
                <ul className="nav__drop">
                    <li><Link to="/Profile">Your profile</Link></li>
                    <li><Link to="/edit-account">Edit account</Link></li>
                    <li><a href="" onClick={Logout}>Log Out</a></li>
                    <div className="traingle"></div>
                </ul>
            </div>
        </div>
    )
}