import React from 'react';
import Home from './Home';
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