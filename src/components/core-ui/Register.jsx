import React from 'react';

export default function Register() {
  return(
      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="text" name="email" placeholder="Email address"/>
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="password"/>
          </div>
        </form>
      </div>
  )
}