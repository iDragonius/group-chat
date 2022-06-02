import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase/compat";
import "../styles/Login.css"
const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
          const provider = new firebase.auth.GoogleAuthProvider()
          const {user} = await auth.signInWithPopup(provider)
          console.log(user)
    }

    setTimeout(function(){

            if(!document.getElementsByClassName('main')[0]) return
            document.getElementsByClassName('main')[0].classList.add(`${localStorage.getItem('lightMode')}LoginMain`)
            document.getElementsByClassName('container')[0].classList.add(`${localStorage.getItem('lightMode')}LoginContainer`)
            document.getElementById('logBtn').classList.add(`${localStorage.getItem('lightMode')}LoginBtn`)

            if(localStorage.getItem('darkMode') === 'true') {
                document.getElementsByClassName('main')[0].classList.remove(`${localStorage.getItem('lightMode')}LoginMain`)
                document.getElementsByClassName('container')[0].classList.remove(`${localStorage.getItem('lightMode')}LoginContainer`)
                document.getElementById('logBtn').classList.remove(`${localStorage.getItem('lightMode')}LoginBtn`)
            }
        
    },10)
    return (
        <div className="main" >
            <div className='container'>
                <h1>Welcome</h1>
                <p>For chatting log in with your google account</p>
                <button id='logBtn' onClick={login} > Sign with Google </button>
            </div>
           
        </div>
    );
};

export default Login;
