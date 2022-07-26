import React from "react";
import Button from "../core-ui/Button";
import { ReactComponent as LogoPNV } from '../../assets/images/LogoPNV.svg';
export default function Header() {
    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="logo">
                    <a href="#"><LogoPNV /></a>
                </div>
                <nav>
                    <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                    <ul className="nav-list">
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
                    <div className="nav-button">
                    <Button buttonStyle="btn--outline">LOGIN</Button>
                    <Button >SIGN UP</Button>
                </div>
                </nav>
            </div>
        </section>
    )
};