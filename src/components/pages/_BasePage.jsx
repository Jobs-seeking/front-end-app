import React from 'react';
import Home from './Home';
import Header from '../layouts/header';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import StudentProfile from '../../components/pages/StudentProfile';
import Joblistingjobs from '../pages/Joblistingjobs'
import FormApply from '../core-ui/formAppy'
import EditStudentAccount from '../pages/EditStudentAccount'
import Account from '../pages/Account'
export default function _BasePage() {
  return(
      <div>
        <Header/>
        <Account/>
        <Footer/>
      </div>
  )
}