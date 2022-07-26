import React from 'react';
import Home from './Home';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import StudentProfile from '../../components/pages/StudentProfile';
import Joblistingjobs from '../pages/Joblistingjobs'
import EditStudentAccount from '../pages/EditStudentAccount'
export default function _BasePage() {
  return(
      <div>
        <Header/>
        <EditStudentAccount/>
        <Footer/>
      </div>
  )
}