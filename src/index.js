import React from 'react';
import '../src/styles/__app.scss';
import ReactDOM from 'react-dom/client';
// import _BasePage from './components/pages/_BasePage';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Joblistingjobs from './components/pages/Joblistingjobs';
// import Formoption from './components/layouts/Joblistingg/Formoption';
// import From from './components/core-ui/Joblisting/Form'




=======
// import EditAccount from './components/pages/EditAccount';
import EditStudentAccount from './components/pages/EditStudentAccount';
>>>>>>> 4e06efdc664ce4377d0c4d33b2a353750fbec6ee



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
   <Joblistingjobs></Joblistingjobs>
  </React.StrictMode>
=======
    <React.StrictMode>
        <_BasePage></_BasePage>
    </React.StrictMode>
>>>>>>> 4e06efdc664ce4377d0c4d33b2a353750fbec6ee
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
