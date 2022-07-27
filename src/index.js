import React from 'react';
import '../src/styles/__app.scss';
import ReactDOM from 'react-dom/client';
import _BasePage from './components/pages/_BasePage';
import reportWebVitals from './reportWebVitals';

// import Joblistingjobs from './components/pages/Joblistingjobs';
// import Formoption from './components/layouts/Joblistingg/Formoption';
// import From from './components/core-ui/Joblisting/Form'





// import EditAccount from './components/pages/EditAccount';
import EditStudentAccount from './components/pages/EditStudentAccount';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //  <Joblistingjobs></Joblistingjobs>
  // </React.StrictMode>

    <React.StrictMode>
        <_BasePage></_BasePage>
    </React.StrictMode>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
