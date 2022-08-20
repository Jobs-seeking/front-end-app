import React from "react";
import Button from "../core-ui/Button";
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { ReactComponent as LogoPNV } from '../../assets/images/pnvlog.svg';
import SessionHelper from "../../utils/SessionHelper";
import Menu from "../containers/menu/menu";
import MenuCompany from "../containers/menu/menuCompany";
import MenuStudent from "../containers/menu/menuStudent";
import NavAccount from "../containers/NavAccount";
import AVT from "../../assets/images/avtb.png";
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
    const dataUser = SessionHelper.getUserInfo();
    return (
      <section className="navigation" id="navigation">
          <div className="nav-container">
              <div className="logo">
                  <a href="#"><LogoPNV /></a>
              </div>

              {SessionHelper.isUserLogedIn() ? <>
                  <div className="nav-search">
                      <form className="nav-search__form">
                          <input className="nav-search__input" placeholder="Search" type="text" />
                          <div className="nav-search__icon">
                              <BiSearchAlt />
                          </div>
                      </form>
                  </div>

              </> : null}

              <nav>
                  {SessionHelper.isUserLogedIn() ? (dataUser.role === "company" ? <MenuCompany></MenuCompany> : <MenuStudent />) : <Menu></Menu>}
                  <div onClick={OpentNavMobile} className="nav-mobile" id="nav-mobile"><span></span><span></span><span></span></div>
                  <div className="nav-button">
                      {SessionHelper.isUserLogedIn() ? ( !dataUser.image ? <NavAccount img={AVT}/>
                          : <NavAccount img={dataUser.image}/>):
                        (
                          <>
                              <Link to="/SISU"><Button buttonStyle="btn--outline">LOGIN</Button></Link>
                              <Link to="/SISU/Register"><Button >SIGN UP</Button></Link>
                          </>
                        )}
                  </div>
              </nav>
          </div>
      </section>
    )
};