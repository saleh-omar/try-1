import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';
export const AuthContext=createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const Authprovider = ({children}) => {

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateProfileInfo = (displayName, photoURL) => {
        // return updateProfile(auth.currentUser, { displayName, photoURL });
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
          })
      };
    

  
   
    useEffect(()=>{
        const unSubsribe =onAuthStateChanged(auth,currentUser =>{
            // console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unSubsribe();
        }
    },[])

    const authinfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        updateProfileInfo,
        signInWithGoogle
    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;