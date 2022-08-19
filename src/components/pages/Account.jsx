import React from 'react';
import {Outlet} from 'react-router-dom';

export default function() {
  return(
      <div className="Account__page">
        {/* <div className="account__intro">
          <span>A</span><span>C</span><span>C</span><span>O</span><span>U</span><span>N</span><span>T</span><p>As a student</p>
        </div> */}
        <div className="account__form">
          <div className="account__form__login">
            <div className="account__form__login--text">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
  )
}