import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providrer/Authprovider';
import userDefaultPic from '../../assets/user.png'
import swal from 'sweetalert';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
  


    const {createUser,updateProfileInfo} =useContext(AuthContext)




   

    const handleRegister = e => {
        
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        
        const photo={userDefaultPic}
        const email = form.get('email');
        const password = form.get('password');
       
        
        console.log(name, photo, email, password);
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
         else if (/[A-Z]/.test(password)) {
            setRegisterError('Your password should have not  upper case characters.')
            return;
        }
      else  if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password))
        {
            setRegisterError('Your password should have not  spacial characters.')
            return;
        }
        else{
            
        }

        
            createUser(email,password)
            .then(result=>{
                console.log(result.user)
                setSuccess('User Created Successfully.')
                { sweetAlert(success)}
             })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                { sweetAlert(registerError)}
            })

            updateProfileInfo(name,photo)
            .then(result=>{
                console.log(result.user)
                
             })
    }

    return (
        <div>
        
        <div className="hero min-h-screen bg-base-200"style={{backgroundImage: 'url(https://i.ibb.co/Qrnq8w2/dan-gold-x-BRQf-R2bq-NI-unsplash.jpg)'}}>
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="card  flex-shrink-0  max-w-sm shadow-2xl  bg-base-100">
  <form  onSubmit={handleRegister}  className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="ename" required name='name' placeholder="name" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" required name='email' placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text"  name='photo' placeholder="URL" className="input input-bordered" />
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
      <button  className="btn btn-primary">Register</button>
    </div>
  </form>
  <p className='text-center mb-4' >Already have a account <Link className='text-red-500' to ="/login">LogIn</Link></p>
 <div className='text-center mb-4 mx-4'>
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

export default Register;






