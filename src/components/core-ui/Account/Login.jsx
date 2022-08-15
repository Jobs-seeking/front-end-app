import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { LOGIN_URL } from '../../../utils/constants';
import Input from '../Input';
import Button from '../Button'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SessionHelper from '../../../utils/SessionHelper';
export default function Login() {
  let navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        "email": "",
        "password": "null",
    })
    const onLogin = async (e) => {
      e.preventDefault()
      const res = (await axios.post(LOGIN_URL, dataForm )).data
      if (res.data) {
        SessionHelper.setUserInfo(res.data)
        navigate("/")
        window.location.reload()
      }
    }
  return(
      <div className="form__login">
        <form  method="POST">
          <div className="account__form__login">
              <div className="account__form__login--text">
                  <span>LOGIN</span>
              </div>
          </div>
          <div className="input-field">
            <label htmlFor="email"></label>
            <Input type="email" name="email" placeholder="Email address"
                   onChange={(e) => setDataForm({...dataForm, "email":e.target.value})}/>
          </div>
          <div className="input-field">
            <label htmlFor="password"></label>
            <Input type="password" name="password" placeholder="Password"
            onChange={(e) => setDataForm({...dataForm, "password":e.target.value})}/>
          </div>
            <div className="form__bottom">
                <Button onClick={onLogin} buttonStyle="btn--solid btn--register__submit">Login</Button>
                <Link to="/SISU/Register"><div className="tauCoTaiKhoanRoi">Create a account</div></Link>
            </div>
        </form>
          <div className="forgot__password">
              <a href="src/components/core-ui/Account/Login">Forget password?</a>
          </div>
      </div>

  )

}