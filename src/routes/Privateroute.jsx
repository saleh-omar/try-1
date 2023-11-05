import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providrer/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const Privateroute = ({children}) => {

   

    const {user,loading} =useContext(AuthContext);
    const location=useLocation();
    console.log(location)
    if(loading){
        return <span><span className="loading loading-spinner loading-lg"></span></span>
    }


    if(user){
        return children;
    }
    else{ swal("Pleasse LogIn")}
    return <Navigate state={location.pathname} to="/login"></Navigate>
   
};

export default Privateroute;