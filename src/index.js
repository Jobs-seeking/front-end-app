import React from 'react';
import '../src/styles/__app.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import _BasePage from './components/pages/_BasePage';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
import Joblistingjobs from './components/pages/Joblistingjobs';
import Register from "./components/core-ui/Account/Register";
import Login from "./components/core-ui/Account/Login";
import FormApply from './components/core-ui/FormApply';
import EditAccount from './components/pages/EditAccount';
import Profile from './components/pages/Profile';
import Recruiter from './components/pages/Recruiter';
import JobDetail from './components/pages/DetailJob';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
       <Routes>
        <Route path='/' element = {<_BasePage></_BasePage>}>
        <Route path="/detail/:id" element={<JobDetail />}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/job' element={<Joblistingjobs/>}/>
            <Route path='/apply' element={<FormApply/>}/>
            <Route path='/SISU' element={<Account/>}>
                <Route path='' element={<Login/>}></Route>
                <Route path='register' element={<Register/>}></Route>
            </Route>
            <Route path="/recruter" element={<Recruiter/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/edit-account' element={<EditAccount/>}></Route>
        </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
