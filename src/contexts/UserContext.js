import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

   const [user, setUser] = useState({});

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

    // Create a Users
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login User
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout 
    const logOut = () => {
        return signOut(auth);
    }

    // Email verify
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // google login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // GitHub login
    const signInWithGithHub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // update user 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }   


    useEffect( () => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })
        return () => {
            unSubscribe(); 
        }
    },[])


    const authInfo = { user, createUser, signIn, logOut, verifyEmail, updateUserProfile, signInWithGoogle, signInWithGithHub};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;