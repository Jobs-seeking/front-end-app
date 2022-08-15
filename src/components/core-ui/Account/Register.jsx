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
        // "firstname": "",
        "name": "",
        "password": "",
        // "confirm_password": ""
    });

    // const validateEmail = (email) => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // const [token, setToken] = useState("")

    // const getToken = () => {
    //     axios.get(BASE_API_URL + USERS_API_URL)
    //         .then((response) => {
    //             console.log(response);
    //             this.setState({events: response.data})
    //         })
    //         .catch((error)=>{
    //             console.log(error);
    //         });
    // }

    const onRegister =  (e) => {
        e.preventDefault();
        axios.post(USERS_API_URL, dataForm)
        .then(res => {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
          });
        // if (dataForm.firstname !== "" && dataForm.lastname !== "" && dataForm.email !== ""
        //     && dataForm.password !== "" && dataForm.confirm_password){
        //     const data = new FormData();
        //     data.append("firstname", dataForm.firstname)
        //     data.append("lastname", dataForm.lastname)
        //     data.append("email", dataForm.email)
        //     data.append("password", dataForm.password)
        //     data.append("confirm_password", dataForm.confirm_password)
        //     console.log(data);
        //     const dataa = await axios.post(USERS_API_URL,data).then(res=> console.log(res.data))
        //     navigate('/SISU')
        // }
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
                  <label htmlFor="first-name"></label>
                  <Input type="text" name="name" placeholder="name"
                  onChange={(e) => {
                      setDataForm({...dataForm , 'name': e.target.value})
                  }} value = {dataForm.name}/>
              </div>
              {/* <div className="input-field">
                  <label htmlFor="last-name"></label>
                  <Input type="text" name="lastname" placeholder="Lastname"
                  onChange={(e) => {
                      setDataForm({...dataForm , 'lastname': e.target.value})
                  }} value = {dataForm.lastname}/>
              </div> */}
              <div className="input-field">
                  <label htmlFor="email"></label>
                  <Input type="email" name="email" placeholder="Email address"
                  onChange={(e) => {
                      setDataForm({...dataForm, 'email': e.target.value})
                  }} value = {dataForm.email}/>
              </div>
              <div className="input-field">
                  <label htmlFor="password"></label>
                  <Input type="password" name="password" placeholder="Password"
                  onChange={(e) => {
                      setDataForm({...dataForm, 'password': e.target.value})
                  }} value={dataForm.password}/>
              </div>
              {/* <div className="input-field">
                  <label htmlFor="password"></label>
                  <Input type="password" name="password" placeholder="Confirm password"
                  onChange={(e) => {
                      setDataForm({...dataForm, 'confirm_password': e.target.value})
                  }} value={dataForm.confirm_password}/>
              </div> */}
              <Button buttonStyle="btn--register__submit btn-solid" onClick={onRegister}>Sign up</Button>
          </form>
      </div>
  )
}