import React, { useEffect, useState } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);
    const createUser = (email, password) => {
        setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signIn = (email, password) => {
        setLodding(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateUserProfile = (name, photo) => {
        setLodding(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };
    const emailvarified = () => {
        setLodding(true);
        return sendEmailVerification(auth.currentUser)
    };
    const Logout = () => {
        setLodding(true);
        return signOut(auth)
    };
    const gooleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, gooleProvider);
    };

    const forgetPassword = (auth, email) => {
        return sendPasswordResetEmail(auth, email);
    };




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLodding(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    const authInfo = {
        lodding,
        user,
        createUser,
        signIn,
        updateUserProfile,
        emailvarified,
        Logout,
        signInWithGoogle,
        forgetPassword,

    };
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvaider;