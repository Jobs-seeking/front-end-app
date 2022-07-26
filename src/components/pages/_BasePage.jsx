import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Account from './Account';

export default function _BasePage() {
  return(
      <div>
        <Header/>
        <Account/>
        <Footer/>
      </div>
  )
}