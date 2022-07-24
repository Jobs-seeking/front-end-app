import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import BASE_URL from '../../utils/constants'


export default function Register() {
    const [submit,setSubmit] = useState(false)
    const [dataForm, setDataForm] = useState({
        "email": "",
        "name": "",
        "password": "",
        "confirm_password": ""
    });

    const [token, setToken] = useState("")

    // const getToken = async () => {
    //     const response = axios.get(BASE_URL)
    //     setToken({token: response.data.token})
    // }

    // useEffect(() => {
    //     getToken()
    // },[])
    return(
      <div className="form__signup">
          <form action="">
              <div className="input-field">
                  <label htmlFor="first-name"></label>
                  <input type="text" name="first-name" placeholder="Firstname"/>
              </div>
              <div className="input-field">
                  <label htmlFor="last-name"></label>
                  <input type="text" name="last-name" placeholder="Lastname "/>
              </div>
              <div className="input-field">
                  <label htmlFor="email"></label>
                  <input type="email" name="email" placeholder="Email address"/>
              </div>
              <div className="input-field">
                  <label htmlFor="password"></label>
                  <input type="password" name="password" placeholder="Password"/>
              </div>
              <div className="input-field">
                  <label htmlFor="password"></label>
                  <input type="password" name="password" placeholder="Confirm password"/>
              </div>
              <button className="register__submit--btn">Sign up</button>
          </form>
      </div>
  )
}