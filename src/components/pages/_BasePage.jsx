import React from 'react';
// import Home from './Home';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Joblistingjobs from '../pages/Joblistingjobs.jsx'

export default function _BasePage() {
  return(
      <div>
        <Header/>
        <Joblistingjobs/>
        <Footer/>
      </div>
  )
}