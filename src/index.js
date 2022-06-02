import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat";
import  'firebase/firestore'
import  'firebase/auth'


firebase.initializeApp(
    {
        apiKey: "AIzaSyCRQ4sOrbWDjBTPRddeVI2ekaZ5Ou4_Ksg",
        authDomain: "chatgroup-7ff49.firebaseapp.com",
        projectId: "chatgroup-7ff49",
        storageBucket: "chatgroup-7ff49.appspot.com",
        messagingSenderId: "375905672459",
        appId: "1:375905672459:web:302766325e3a877256560e"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <App />
  </Context.Provider>,

  document.getElementById('root')
);

