import React from 'react';
import '../src/styles/__app.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import _BasePage from './components/pages/_BasePage';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home';
import Account from './components/pages/Account';
// import Joblistingjobs from './components/pages/Joblistingjobs';
import FormApply from './components/core-ui/FormApply';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path='/' element = {<_BasePage></_BasePage>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='/login' element ={<Account/>}/>
          {/* <Route path='/jobs' element ={<Joblistingjobs/>}/> */}
          <Route path='/formapply' element = {<FormApply/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
