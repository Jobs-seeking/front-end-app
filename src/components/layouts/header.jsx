import React from "react";
import Button from "../core-ui/Button";
import { ReactComponent as LogoPNV } from '../../assets/images/LogoPNV.svg';
export default function Header() {
    const OpentNavMobile = () =>{
        var x = document.getElementById("nav-list");
        if (x.className ==="nav-list"){
            x.className += "-navmobile";
        }else{
            x.className ="nav-list";
        }
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
                            <a href="#!">RECRULTERS</a>
                        </li>
                        <li>
                            <a href="#!">HOME</a>
                        </li>
                        <li>
                            <a href="#!">JOBS</a>
                        </li>
                        <li>
                            <a href="#!">APPLY CV</a>
                        </li>
                    </ul>
                    <div onClick={OpentNavMobile} className="nav-mobile" id="nav-mobile"><span></span><span></span><span></span></div>
                    <div className="nav-button">
                        <Button buttonStyle="btn--outline">LOGIN</Button>
                        <Button >SIGN UP</Button>
                    </div>
                </nav>
            </div>
        </section>
    )
};