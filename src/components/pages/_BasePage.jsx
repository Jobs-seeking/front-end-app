import React from 'react';
import Home from './Home';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import EditStudentAccount from './EditStudentAccount';
export default function _BasePage() {
  return(
      <div>
        <Header/>
        <Home/>
        <EditStudentAccount/>
        <Footer/>
      </div>
  )
}