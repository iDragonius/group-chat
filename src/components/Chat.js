import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Navbar from './Navbar';
import firebase from "firebase/compat";
import Loader from "./Loader";
import Modal from './Modal';
import '../styles/Chat.css'
import Palette from './Palette'
import moment from 'moment'
const Chat = () => {
    const  {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value,setValue] = useState('')

    let [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const sendMessages = async () => {
        if(value.trim()=== '') return

        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            unique: Date.now(),
            time:moment().format('HH:mm')

        })

        setValue('')
    }
    let photo;
    let name;
    if(user?.photoURL){
         photo = user.photoURL
    }
    if(user?.displayName ){
         name = user.displayName
    }
    if (loading) {
        if(localStorage.getItem('darkMode')==='false'){
            if(!document.getElementsByClassName('loader')[0]){
            } else {
            document.getElementsByClassName('loader')[0].classList.add(`${localStorage.getItem('lightMode')}Loader`)
            }
        }
        return (
            <Loader/>
      
        )
    }
    const cha = (e) => {
        e.preventDefault()
        const target = document.getElementById('chat');
        const config = {
            childList: true
        };

        const callback = function(mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    target.childNodes[target.childNodes.length-1].scrollIntoView({behavior: "smooth"})

                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);
        observer.disconnect()
    };



    setTimeout(() => {
        if(!document.getElementById('chat')) return
        if(document.getElementById('chat').childNodes.length === 0) return
        if(loading) return
        document.getElementById('chat').childNodes[document.getElementById('chat').childNodes.length-1].scrollIntoView({behavior: "smooth"})
        console.log(user)

    }, 0);

    const view = (e) => {
        e.stopPropagation()
        document.getElementsByClassName('modal')[0].classList.toggle('unActive')

    }

    window.onclick=()=>{
        if(!document.getElementsByClassName('modal')[0]) return
        if( document.getElementsByClassName('modal')[0].classList.contains('unActive')){
            return
        } else {
            document.getElementsByClassName('modal')[0].classList.toggle('unActive')

        }
    }
//     if(messages === null){
//         messages = ['<div></div>']
//     }


    return (
        <div >
            <Navbar userName={name} photo={photo} />
            <div className= 'cont' style={{display:'flex', flexDirection:'column'}}>
                <Palette />
                <div className ='chat' id='chat'>
                    {messages.map( message =>
                        <div key={message.unique} className='mess' style= {{
                            background: user?.uid === message.uid ? '#273250' : '#1b2136',
                            color: 'azure',
                            marginLeft: user?.uid === message.uid ? 'auto' : '10px',
                        }} >
                            <div style={{display:'flex', justifyContent:'space-between' }}>
                                <div style={{display:'flex' }}>
                                    <img src={message.photoURL} height='60px' className='user_photo' alt='' />
                                    <div className='user_name' > {message.displayName } </div>
                                </div>
                                <div className='time'>{message.time}</div>
                            </div>
                            <div className='mess_text' >
                            {message.text}
                            </div>

                        </div>

                        )}
                </div>
                <form action='' className="chat_mess" onSubmit={cha} >
                    <Modal value= {value} setValue={setValue} />
                    <div className='smiles' onClick={view}></div>
                    <input className='mess_input' placeholder="Your message..." value={value} onChange={e=>setValue(e.target.value)} />
                    <button className='mess_btn' type='submit' onClick={sendMessages} >Send</button>
                </form>
            </div>

        </div>
    );
};

export default Chat;
