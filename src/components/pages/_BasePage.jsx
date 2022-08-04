import React from 'react';
import Home from './Home';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import StudentProfile from '../../components/pages/StudentProfile';
import Joblistingjobs from '../pages/Joblistingjobs'
import FormApply from '../core-ui/FormApply'
import EditStudentAccount from '../pages/EditStudentAccount'
import Account from '../pages/Account'
import {Outlet} from 'react-router-dom';
export default function _BasePage() {
  return(
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
  )
}