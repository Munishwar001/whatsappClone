import Login from "../loginUser/login";
import Signup from "../signupUser/signup";
import { useNavigate } from "react-router-dom";
import App from "../../../App";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "../404PageNotFound/404PageNotFound";
import OTPVerification from "../forgot password/forgotPassword"
import ResetPassword from "../forgot password/reset-password"
export default function HandleRouter() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function checkLogin() {
      await fetch("http://localhost:8000/protected", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then((data) => {
          console.log(data);
          if (data.status == 200) {
            setIsLogin(true);
            navigate("/app");
          } else {
            setIsLogin(false);
            navigate("/login");
          }
        })
        .catch((err) => {
          navigate("/");
          console.log(err);
        });
    }
    checkLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/forgot-password" element={<OTPVerification/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route
          path="/app"
          element={isLogin ? <App /> : <Login setIsLogin={setIsLogin} />}
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// import Login from "../loginUser/login";
// import Signup from "../signupUser/signup";
// import { useNavigate } from "react-router-dom";
// import App from "../../../App";
// import React,{useState,useEffect} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NotFoundPage from "../404PageNotFound/404PageNotFound";
// export default function HandleRouter() {
//     const [isLogin, setIsLogin] = useState(false);
//     const navigate = useNavigate();
//     useEffect(() => {
//         async function checkLogin() {
//             await fetch("http://localhost:8000/protected", {
//                 method: 'GET',
//                 headers: { "Content-Type": "application/json" },
//                 credentials : "include"
//             }).then((data) => {
//                 console.log(data)
//                 if(data.status==200) {
//                     setIsLogin(true);
//                 navigate("/app")

//             }
//                 else{
//                     navigate("/login")
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//         }
//         checkLogin();
//     }, [])

//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<Signup/> } />
//                 <Route path="/login" element={<Login   setIsLogin={setIsLogin}/>} />
//                 <Route path="/app" element={ isLogin? <App/> : <Login/>} />
//                 <Route path="/*" element={<NotFoundPage />} />
//             </Routes>
//         </>
//     )
// }
