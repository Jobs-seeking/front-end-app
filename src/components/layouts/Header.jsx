import React from "react";
import Button from "../core-ui/Button";
import { Link } from "react-router-dom";
import { ReactComponent as LogoPNV } from '../../assets/images/pnvlog.svg';
export default function Header() {
    const OpentNavMobile = () => {
        var x = document.getElementById("nav-list");
        if (x.className === "nav-list") {
            x.className += "-navmobile";
        } else {
            x.className = "nav-list";
        }
    }
    const DCM =(evt) =>{
        var i;
        var x =document.getElementsByClassName("dcm");
        for(i=0; i<x.length;i++){
            x[i].className=x[i].className.replace(" active","")
        }
        evt.currentTarget.className += " active";
    }
    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="logo">
                    <a href="#"><LogoPNV /></a>
                </div>
                <nav>
                    <ul className="nav-list" id="nav-list">
                        <li>
                            <a  className="dcm" onClick={DCM} href="#!">RECRUITERS</a>
                        </li>
                        <li>
                            <Link  className="dcm"  onClick={DCM} to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="dcm" onClick={DCM} to="/job">JOBS</Link>
                        </li>
                        <li>
                            <Link className="dcm" onClick={DCM} to="formapply">APPLY CV</Link>
                            {/* <a className="dcm" onClick={DCM} href="#!">APPLY CV</a> */}
                        </li>
                    </ul>
                    <div onClick={OpentNavMobile} className="nav-mobile" id="nav-mobile"><span></span><span></span><span></span></div>
                    <div className="nav-button">
                        <Link to="/SISU"><Button buttonStyle="btn--outline">LOGIN</Button></Link>
                        <Link to="/SISU/Register"><Button >SIGN UP</Button></Link>
                    </div>
                </nav>
            </div>
        </section>
    )
};
