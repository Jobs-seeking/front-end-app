import React from "react"
import { Link } from "react-router-dom"
export default function MenuStudent() {
    const active = (evt) => {
        var i;
        var x = document.getElementsByClassName("nav__item--link");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "")
        }
        evt.currentTarget.className += " active";
    }
    return (
        <ul className="nav-list" id="nav-list">
            <li>
                <Link className="nav__item--link" onClick={active} to="/">HOME</Link>
            </li>
            <li>
                <a className="nav__item--link" onClick={active} href="#!">RECRUITERS</a>
            </li>
            <li>
                <Link className="nav__item--link" onClick={active} to="/job">JOBS</Link>
            </li>
        </ul>
    )
}