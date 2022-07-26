import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import BASE_URL from '../../utils/constants';

export default function Login() {

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
            // const res = axios.post(BASE_URL, data);
        }
    }
  return(
      <div className="form__login">
        <form action="">
          <div className="input-field">
            <label htmlFor="email"></label>
            {/*<input type="email" name="email" placeholder="Email address"*/}
            {/*onChange={(e) => setDataForm({...dataForm, "email":e.target.value})}/>*/}
            <Input type="email" name="email" placeholder="Email address"
                   onChange={(e) => setDataForm({...dataForm, "email":e.target.value})}/>
          </div>
          <div className="input-field">
            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Password"
            onChange={(e) => setDataForm({...dataForm, "password":e.target.value})}/>
          </div>
            <button className="login__submit--btn" onClick={()=>onLogin()}>Login</button>
        </form>
          <div className="forgot__password">
              <a href="">Forget password?</a>
          </div>
      </div>
  )
}