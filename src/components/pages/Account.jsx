import React from 'react';

export default function() {
  return(
      <div>
        <div className="account__intro">
          <span>A</span><span>C</span><span>C</span><span>O</span><span>U</span><span>N</span><span>T</span><p>As a student</p>
        </div>
        <div className="account__text">
          <div className="account__text__title">The <span>PNV's</span> New Job Site</div>
          <div className="account__text__passion">New Jobs Coming Soon</div>
        </div>
        <div className="account__form">
          <div className="account__form__login">
            <div className="account__form__login--text">
              <span>LOGIN</span>
              <p>Sign in for quick reordering or to edit your subscription.</p>
            </div>
          </div>
          <div className="account__form__register">
            <div className="account__form__register--text">
              <span>SIGNUP</span>
            </div>
          </div>

        </div>
      </div>
  )
}