import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser);
         console.log('current user', currentUser);
         setLoading(false);
       });
       return ()=>{
          return unsubscribe();
       } 
    },[]);

    // create user with email and password
     const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
     };

    //  create user with google
    const loginUserWithGoogle =()=>{
        return signInWithPopup(auth,provider);
    };

    // Login a use with email and password
    const LogInWithEmailAndPassword =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // log out a user
    const UserLogOut = ()=>{
        return signOut(auth);
    }
    const authInfo = {user, loading, createUser, loginUserWithGoogle, LogInWithEmailAndPassword,
        UserLogOut, 
    }

    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;