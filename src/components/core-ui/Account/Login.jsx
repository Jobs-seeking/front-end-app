import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../../utils/constants';
import Input from '../Input';
import Button from '../Button'
import {Link, useNavigate} from "react-router-dom";


export default function Login() {
   let navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        "email": "",
        "password": "null",
    })

    const onLogin = () => {
        if(dataForm.email !== "" && dataForm.password !== "") {
            const data = new FormData();
            data.append("email", dataForm.email)
            data.append("password", dataForm.password)
            console.log(dataForm)
          navigate('/')
            // const res = axios.post(BASE_URL, data);
        }
    }

  return(
      <div className="form__login">
          <div className="account__form__login">
              <div className="account__form__login--text">
                  <span>LOGIN</span>
                  {/*  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>*/}
              </div>
          </div>
        <form action="src/components/core-ui/Account/Login">
          <div className="input-field">
            <label htmlFor="email"></label>
            {/*<input type="email" name="email" placeholder="Email address"*/}
            {/*onChange={(e) => setDataForm({...dataForm, "email":e.target.value})}/>*/}
            <Input type="email" name="email" placeholder="Email address"
                   onChange={(e) => setDataForm({...dataForm, "email":e.target.value})}/>
          </div>
          <div className="input-field">
            <label htmlFor="password"></label>
            <Input type="password" name="password" placeholder="Password"
            onChange={(e) => setDataForm({...dataForm, "password":e.target.value})}/>
          </div>
            <Button buttonStyle="btn--solid btn--register__submit" onClick={()=>onLogin()}>Login</Button>
            <Link to="/SISU/Register"><div className="tauCoTaiKhoanRoi">Create a account</div></Link>
        </form>
          <div className="forgot__password">
              <a href="src/components/core-ui/Account/Login">Forget password?</a>
          </div>
      </div>
  )

}