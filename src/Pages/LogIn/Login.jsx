import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../Providrer/Authprovider';
import swal from 'sweetalert';

const Login = () => {

    const location=useLocation();
    // console.log(location)
    const navigate= useNavigate()
    const {signIn,signInWithGoogle}=useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    


    const handleLogin = e => {
        
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        setRegisterError('');
        setSuccess('');
        

        
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess('Successfully LogIN')
            { swal(success)}
           

          navigate(location?.state?location.state:"/")
         
           
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
            { sweetAlert(registerError)}
        })
      

        
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            setSuccess('Successfully LogIN')
            { swal(success)}
            navigate(location?.state?location.state:"/")
        })
        .catch(error => {
            console.error(error)
            { swal(registerError)}
        })
    }



    return (
        <div>
        
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/Qrnq8w2/dan-gold-x-BRQf-R2bq-NI-unsplash.jpg)'}}>
    <div className="hero-content flex-col lg:flex-row-reverse">

<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleLogin}  className="card-body bg-transparent">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" required name='email' placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-green-400">Login</button>
    </div>
   
  </form>
  <button onClick={handleGoogleSignIn}  className="btn  bg-green-400 w-[50%] mx-auto mb-2  ">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
  <p className='text-center' >Dont have a account  <Link className='text-red-500' to ="/register">Register</Link></p>
  <div className='text-center mx-4 mb-2'>
  {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
  </div>
 
</div>
</div>
        </div>
    </div>
    );
};

export default Login;