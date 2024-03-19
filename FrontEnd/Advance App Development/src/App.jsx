import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserLogin from './Components/Login'
import UserRegister from './Components/Register'
import Homee from './Components/HomePage';
import AdminLogin from './Components/AdminLogin';
import AdminRegister from './Components/AdminRegister';
import AdminDashboard from './Components/AdminDashboard';
import CreateJob from './Components/CreateJob';
import ApplicantDashboard from './Components/ApplicantDashboard';
import JobPosting from './Components/JobPosting';
import About from './Components/About';
import PaymentPage from './Components/Payment';

function App() {
  useEffect(() => {
    document.title = 'JOB SPARK'; 
  }, []);
  return (
    <>
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Homee/>}></Route>
     <Route path="/applicantlogin" element ={<UserLogin/>}></Route>
     <Route path="/applicantsignup" element={<UserRegister/>}></Route>
     <Route path="/adminlogin" element={<AdminLogin/>}></Route>
     <Route path="/adminsignup" element={<AdminRegister/>}></Route>
     <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
     <Route path="/applicantdashboard" element={<ApplicantDashboard/>}></Route>
     <Route path="/createjob" element={<CreateJob/>}></Route>
     <Route path="/jobposting" element={<JobPosting/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/payment" element={<PaymentPage/>}></Route>
     </Routes>
     </BrowserRouter></div>
    </>
  );
}

export default App;
