// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {BASE_URL, API_URL} from '../../../utils/constants'
// import Input from '../Input';
// import Button from '../Button';

// export default function Register() {
//     // const [submit,setSubmit] = useState(false)
//     const [dataForm, setDataForm] = useState({
//         "email": "",
//         "firstname": "",
//         "lastname": "",
//         "password": "",
//         "confirm_password": ""
//     });

//     const validateEmail = (email) => {
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }

//     const [token, setToken] = useState("")


//     const getToken = () => {
//         axios.get(BASE_URL + API_URL)
//             .then((response) => {
//                 console.log(response);
//                 this.setState({events: response.data})
//             })
//             .catch((error)=>{
//                 console.log(error);
//             });
//     }

//     const onRegister = () => {
//         if (dataForm.firstname !== "" && dataForm.lastname !== "" && dataForm.email !== ""
//             && dataForm.password !== "" && dataForm.confirm_password){

//             const data = new FormData();
//             data.append("firstname", dataForm.firstname)
//             data.append("lastname", dataForm.lastname)
//             data.append("email", dataForm.email)
//             data.append("password", dataForm.password)
//             data.append("confirm_password", dataForm.confirm_password)

//             console.log(dataForm)

//             axios.post(BASE_URL, API_URL, data)
//         }


//     }
//     // useEffect(() => {
//     //     getToken()
//     // },[])

//     return(
//       <div className="form__signup">
//           <form action="src/components/core-ui/Account/Register">
//               <div className="input-field">
//                   <label htmlFor="first-name"></label>
//                   <Input type="text" name="firstname" placeholder="Firstname"
//                   onChange={(e) => {
//                       setDataForm({...dataForm , 'firstname': e.target.value})
//                   }} value = {dataForm.firstname}/>
//               </div>
//               <div className="input-field">
//                   <label htmlFor="last-name"></label>
//                   <Input type="text" name="lastname" placeholder="Lastname"
//                   onChange={(e) => {
//                       setDataForm({...dataForm , 'lastname': e.target.value})
//                   }} value = {dataForm.lastname}/>
//               </div>
//               <div className="input-field">
//                   <label htmlFor="email"></label>
//                   <Input type="email" name="email" placeholder="Email address"
//                   onChange={(e) => {
//                       setDataForm({...dataForm, 'email': e.target.value})
//                   }} value = {dataForm.email}/>
//               </div>
//               <div className="input-field">
//                   <label htmlFor="password"></label>
//                   <Input type="password" name="password" placeholder="Password"
//                   onChange={(e) => {
//                       setDataForm({...dataForm, 'password': e.target.value})
//                   }} value={dataForm.password}/>
//               </div>
//               <div className="input-field">
//                   <label htmlFor="password"></label>
//                   <Input type="password" name="password" placeholder="Confirm password"
//                   onChange={(e) => {
//                       setDataForm({...dataForm, 'confirm_password': e.target.value})
//                   }} value={dataForm.confirm_password}/>
//               </div>
//               <Button buttonStyle="btn--register__submit btn-solid" onClick={() => onRegister()}>Sign up</Button>
//           </form>
//       </div>
//   )
// }