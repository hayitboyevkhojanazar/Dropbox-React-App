import React from 'react';
import { useState } from 'react';
import "./Auth.css";
import Login from './Login';
import Signup from './Signup';
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase/firebase";
import { setLogIn } from "../../Slices/user/userSlice";
import axios from 'axios';

function Auth() {
  const [ active, setActive ] = useState("login");
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

   const LoginwithGoogle = async () => {
      await signInWithPopup(auth, provider).then((res) => {
         let user = res.user;

         dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      });
   };

  const handleSignup = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         setError('Password and confirm password must match');
         return;
      }

      try {
         const response = await axios.post('/api/signup', {
            name,
            email,
            password,
         });
      } catch (error) {
         setError(error.response.data.message);
      }
   };



   const handleChange = () => {
      setActive(active === "login" ? "signup" : "login");
   }
   return <div className="Auth">
      <div>
      { active === "login" ? <Login /> : <Signup /> }
      </div>
      <div className="extra">
      <span>
         {active === "login" ? (
            <div className="btn1">
            Don't have an account? <button className='btn_signup' onClick={handleChange}>Sign up</button>{" "}
            </div>
         ) : (
            <div className="btn2">
            Have an account? <button className='btn_login' onClick={handleChange}>Login</button>
            </div>
         )}
      </span>
      </div>
   </div>
}

export default Auth;