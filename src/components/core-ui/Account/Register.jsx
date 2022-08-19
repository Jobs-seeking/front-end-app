import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {USERS_API_URL} from '../../../utils/constants'
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate = useNavigate();
    // const [submit,setSubmit] = useState(false)
    const [dataForm, setDataForm] = useState({
        "email": "",
        "name": "",
        "password": "",
        "role":" ",

    });
    const onRegister =  (e) => {
        e.preventDefault();
        axios.post(USERS_API_URL, dataForm)
        .then(res => {
            console.log(res.data);
            alert("Success!");
            navigate("/SISU");
        })
        .catch(function (error) {
            console.log(error);
          });
    }
    return(
      <div className="form__signup">
          <div className="account__form__login">
              <div className="account__form__login--text">
                  <span>SIGNUP</span>
              </div>
          </div>
          <form >
              <div className="input-field">
                  <label htmlFor="first-name">YOUR NAME</label>
                  <Input type="text" name="name" placeholder="Enter your name"
                  onChange={(e) => {
                      setDataForm({...dataForm , 'name': e.target.value})
                  }} value = {dataForm.name}/>
              </div>
              <div className="input-field">
                  <label htmlFor="email">EMAIL</label>
                  <Input type="email" name="email" placeholder="Enter email"
                  onChange={(e) => {
                      setDataForm({...dataForm, 'email': e.target.value})
                  }} value = {dataForm.email}/>
              </div>
              <div className="input-field">
                  <label htmlFor="password">PASSWORD</label>
                  <Input type="password" name="password" placeholder="Enter your password"
                  onChange={(e) => {
                      setDataForm({...dataForm, 'password': e.target.value})
                  }} value={dataForm.password}/>
              </div>
              <div className='check__box' onChange={(e) => {
                      setDataForm({...dataForm, 'role': e.target.value})
                  }} value = {dataForm.role}>
                <div className='check__box--item'>
                <input type="radio" id='Company' name="role" value="company"/>
                <label htmlFor="Company">Company</label>
                </div>
                <div className='check__box--item'>
                <input type="radio" id='Student' name="role" value="student"/>
                <label htmlFor="Student">Student</label>
                </div>
              </div>
              <Button buttonStyle="btn--register__submit" onClick={onRegister}>SIGN UP</Button>
          </form>
      </div>
  )
}