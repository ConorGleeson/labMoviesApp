// super basic login page for now // will use firebase https://www.youtube.com/watch?v=9bXhf_TELP4&list=PLojo8XsHDJJoDEKxxijp1j2nw5Qt5QwY7&index=2 video tutorial on firebase setup

import { useEffect, useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase-config.js'
import {onAuthStateChanged} from 'firebase/auth'
import {signOut} from 'firebase/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'

function LoginPage(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const [user, setUser] = useState({});
    useEffect(() => {

        onAuthStateChanged(auth, (currentUser) => {
    
            setUser(currentUser);
    
        });
    
    }, )

    //firebase uses async await
    const register = async () =>{
        try{
      const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      //console.log(user)
        }catch(error){
            console.log(error.message)
        }
    };

    const login = async () =>{
        try{
            const user =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            //console.log(user)
              }catch(error){
                  console.log(error.message)
              }

    };

    const logout = async () => { 
        await signOut(auth)

    };
    return(
        <div>
            <div>
                <h1>Register</h1>
                <input placeholder="Email" onChange={(event) => { setRegisterEmail(event.target.value) }}/>
                <input placeholder="Password"  onChange={(event) => { setRegisterPassword(event.target.value) }}/>
                <button onClick={register}>Create User</button>

            </div>
            <div>
                <h1>Login</h1>
                <input placeholder="Email" onChange={(event) => { setLoginEmail(event.target.value) }}/>
                <input placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value) }}/>
                <button onClick={login}>Login</button>
            </div>
            <div>
                <h1>User:  </h1>
                {user ? user.email : "Not Logged In"}
            </div>
            <div>
                <button onClick={logout}>Sign Out</button>
            </div>
        </div>
    )


    
} export default LoginPage