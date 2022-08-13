import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, USER_SESSION_KEY} from '../../../utils/constants';
import Input from '../Input';
import Button from '../Button'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SessionHelper from '../../../utils/SessionHelper';
import AuthUser from '../../../utils/authUser'
export default function Login() {
  let navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        "email": "",
        "password": "null",
    })
    


    const onLogin = async (e) => {
      e.preventDefault()
      const res = (await axios.post("http://127.0.0.1:8000/api/users/login", dataForm )).data
      if (res.data) {
        console.log(res.data);
        SessionHelper.setUserInfo(res.data)
        navigate("/")
      }
    }

  return(
      <div className="form__login">
        <form onSubmit={onLogin} method="POST">
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
                <Button  buttonStyle="btn--solid btn--register__submit">Login</Button>
                <Link to="/SISU/Register"><div className="tauCoTaiKhoanRoi">Create a account</div></Link>
            </div>
        </form>
          <div className="forgot__password">
              <a href="src/components/core-ui/Account/Login">Forget password?</a>
          </div>
      </div>
  )

}