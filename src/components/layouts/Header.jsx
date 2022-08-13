import React from "react";
import Button from "../core-ui/Button";
import { Link } from "react-router-dom";
import { ReactComponent as LogoPNV } from '../../assets/images/pnvlog.svg';
import SessionHelper from "../../utils/SessionHelper";
export default function Header() {
    window.onscroll = function () { ScrollNav() };
    const ScrollNav = () => {
    var x = document.getElementById('navigation');
    if (document.documentElement.scrollTop > 60) {
        x.classList.add("scrollNavbar");
    }
    else {
        x.classList.remove("scrollNavbar")
    }
}
    const OpentNavMobile = () => {
        var x = document.getElementById("nav-list");
        if (x.className === "nav-list") {
            x.className += "-navmobile";
        } else {
            x.className = "nav-list";
        }
    }
    const active = (evt) => {
        var i;
        var x = document.getElementsByClassName("nav__item--link");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "")
        }
        evt.currentTarget.className += " active";
    }
    return (
        <section className="navigation" id="navigation">
            <div className="nav-container">
                <div className="logo">
                    <a href="#"><LogoPNV /></a>
                </div>
                <nav>
                    <ul className="nav-list" id="nav-list">
                        <li>
                            <a className="nav__item--link" onClick={active} href="#!">RECRUITERS</a>
                        </li>
                        <li>
                            <Link className="nav__item--link" onClick={active} to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="nav__item--link" onClick={active} to="/job">JOBS</Link>
                        </li>
                        <li>
                            <Link className="nav__item--link" onClick={active} to="formapply">APPLY CV</Link>
                            {/* <a className="active" onClick={active} href="#!">APPLY CV</a> */}
                        </li>
                    </ul>
                    <div onClick={OpentNavMobile} className="nav-mobile" id="nav-mobile"><span></span><span></span><span></span></div>
                    <div className="nav-button">
                        {SessionHelper.isUserLogedIn() ? SessionHelper.getUserInfo().name :
                            (
                                <>
                                    <Link to="/SISU"><Button buttonStyle="btn--outline">LOGIN</Button></Link>
                                    <Link to="/SISU/Register"><Button >SIGN UP</Button></Link></>
                            )}
                    </div>
                </nav>
            </div>
        </section>
    )
};
