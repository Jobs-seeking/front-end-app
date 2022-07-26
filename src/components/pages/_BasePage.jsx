import React from 'react';
import Home from './Home';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import StudentProfile from '../../components/pages/StudentProfile';
import CompanyProfile from '../../components/pages/CompanyProfile';
import Joblistingjobs from '../pages/Joblistingjobs'
import FormApply from '../core-ui/FormApply'
import EditStudentAccount from './EditAccount'
import Account from '../pages/Account'
import {Outlet} from 'react-router-dom';
import JobDetail from './DetailJob';
export default function _BasePage() {
  return(
      <div className='wrapper'>
        <Header/>
            <Outlet/>
        <Footer/>
      </div>
  )
}