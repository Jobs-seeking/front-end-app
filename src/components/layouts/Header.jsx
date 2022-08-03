import React from "react";
import Button from "../core-ui/Button";
import { Link } from "react-router-dom";
import { ReactComponent as LogoPNV } from '../../assets/images/LogoPNV.svg';
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
                            <a  className="dcm" onClick={DCM} href="#!">RECRULTERS</a>
                        </li>
                        <li>
                            <Link  className="dcm"  onClick={DCM} to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="dcm" onClick={DCM} to="/jobs">JOBS</Link>
                        </li>
                        <li>
                            <a className="dcm" onClick={DCM} href="#!">APPLY CV</a>
                        </li>
                    </ul>
                    <div onClick={OpentNavMobile} className="nav-mobile" id="nav-mobile"><span></span><span></span><span></span></div>
                    <div className="nav-button">
                        <Link to="/login"><Button buttonStyle="btn--outline">LOGIN</Button></Link>
                        <Button >SIGN UP</Button>
                    </div>
                </nav>
            </div>
        </section>
    )
};
