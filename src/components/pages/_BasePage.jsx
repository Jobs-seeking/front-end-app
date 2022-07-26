
import React from "react";
// import Home from "./Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import CompanyProfile from "./CompanyProfile";
import StudentProfile from "./StudentProfile";
export default function _BasePage() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <CompanyProfile />
      <StudentProfile />
      <Footer />
    </div>
  );
}