import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Signin from "./components/Signin/Signin"
import Signup from "./components/Signup/Signup"
import Signupform from './components/Studentsignupform/Signupform.jsx';
// import StaffSignupform from './components/StaffSignupform/StaffSignupform.jsx';
import Signpage from './components/Signpage/Signpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path ="signin/student" element={<Signpage/>} />
      <Route path ="signin/staff" element={<Signpage/>} />
      <Route path ="signup/student" element={<Signupform/>} />
      <Route path ="signup/staff" element={<Signupform/>} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
