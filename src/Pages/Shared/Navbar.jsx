import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import { AuthContext } from '../Providrer/Authprovider';

const Navbar = () => {
 
const {user,logOut}=useContext(AuthContext)

const handleSignOut=()=>{
    logOut()
}

    return (



        <div className=" lg:max-w-6xl mx-auto">
        <nav className="flex lg:justify-between lg:flex-row flex-col items-center py-6  px-5">
  
       <div className='flex items-center gap-3'>
        <h1 className='text-2xl font-bold'>DreamStay</h1>
       <div className='w-14 h-14'>
        <img className='w-full h-full rounded-full ' src='https://i.ibb.co/StcnGvB/hotel-logo-free-vector.jpg' />
  
       </div>
       </div>
          <ul className="flex my-10 gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending font-semibold" : isActive ? "text-white px-4 py-2 font-semibold bg-gray-600 rounded-md" : ""
                }
                style={{ fontWeight: "600" }}
              >
                Home
              </NavLink>
  
            </li>
  
            <li>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending bold" : isActive ? "text-white px-4 py-2 bg-gray-600  rounded-md" : ""
                }
                style={{ fontWeight: "600" }}
              >
              Rooms
              </NavLink>
  
              
            </li>
            <li>
              <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-white px-4 py-2 bg-gray-600 rounded-md" : ""
                }
                style={{ fontWeight: "600" }}
              >
               My Bookings
              </NavLink>
  
              
            </li>
            {/* <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-white px-4 py-2 bg-green-400 rounded-md" : ""
                }
              >
                Contact
              </NavLink>
  
              
            </li> */}
            {/* <li>
              <NavLink
                to="/donate"
                className={({ isActive, isPending }) =>
                  isPending ? "pending font-semibold" : isActive ? "text-white px-4 py-2 font-semibold bg-gray-600 rounded-md" : ""
                }
              >
                Donate
              </NavLink>
  
            </li> */}
           
          </ul>
         
          <div className='flex gap-4'>
          
              <div className='flex flex-col justify-center items-center'>
              <div className='w-8 h-8'>
               {
                  user?.photoURL?<img className='rounded-full' src={user.photoURL}alt="" />:<img src={userDefaultPic}></img>
                  
                }
               </div>
              {
                <h2 className='font-bold'>{user?.displayName?user.displayName:"User"
                }</h2>
              }
              </div>
              {
                    user ? <button onClick={handleSignOut} className="btn">SignOut</button>
                    :  
                        <Link to="/login">
                         <button  className="btn bg-gray-600 text-white">LogIn</button>
                        </Link>

                }
          </div>
            
        </nav>
      </div>
    );
};

export default Navbar;