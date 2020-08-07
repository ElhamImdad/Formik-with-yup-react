import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import WithUseFormik from './components/WithUseFormik';
import AxiosFormik from './components/AxiosFormik';
// import Form from './components/WithRecomposer';
import MultiStepsForm from './components/MultiStepsForm';


function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      <MultiStepsForm/>
      {/* <div>
    <Form form={{phoneNumber: '+7', authCode: ''}} />
  </div> */}
      {/* <WithUseFormik/> */}
      {/* <AxiosFormik/> */}
    </div>
  );
}

export default App;
