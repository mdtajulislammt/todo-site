import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";

// import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
     const googleProvider = new GoogleAuthProvider();
     const FacebookProvider = new FacebookAuthProvider();
     // const axiosPublic = useAxiosPublic()

     //google login
     const googleSignIn = ()=>{
          setLoading(true);
          return signInWithPopup(auth,googleProvider)
     }
     //Facebook login
     const facebookSignIn = ()=>{
          setLoading(true);
          return signInWithPopup(auth,FacebookProvider)
     }

     // signup 
     const signUp = (email,password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }

     // signIn 
     const signIn = (email,password) =>{

          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }

     //logOut

     const logOut = () =>{
          setLoading(true)
          return signOut(auth)
     }

     //update user 
     const updateUserprofile = (name, img) =>{
          return updateProfile(auth.currentUser,{
                 displayName: name, photoURL : img
           })
      }


     //user manage 
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                 setUser(currentUser);
                 
            })
            return()=>{
                 return unsubscribe();
            }
       },[])


     const authInfo = {
          user,
          loading,
          signUp,
          signIn,
          logOut,
          updateUserprofile,
          googleSignIn,
          facebookSignIn
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;