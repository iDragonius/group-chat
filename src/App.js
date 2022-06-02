import React, {useContext} from 'react'
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {
    const  {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)


    if(loading) {
        return <Loader/>
    }
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
