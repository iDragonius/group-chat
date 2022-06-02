import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import UserModal from './UserModal'
import '../styles/Chat.css'
const Navbar = ({userName, photo}) => {
    const  {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const modeDark = 'url(https://cdn-icons-png.flaticon.com/512/1680/1680154.png)'
        const modeLight = 'url(https://cdn-icons-png.flaticon.com/512/1829/1829143.png)'
    const modeWhich = (localStorage.getItem('darkMode') === 'false' ? modeLight : modeDark )
    const [url, setUrl] = useState(modeWhich)
    const [count, setCount] =useState(0)
    if(!localStorage.getItem('darkMode')){
        localStorage.setItem('darkMode', true)
    }
    setTimeout(function(){
        let items;

        if(!document.getElementById('chat')){
            return
       }   else{
            items =[...document.getElementById('chat').childNodes]
           
       }

        if(localStorage.getItem('darkMode') === 'true') {
            document.getElementsByClassName('cont')[0].classList.remove(`${localStorage.getItem('lightMode')}Bg`)
            document.getElementsByClassName('nav')[0].classList.remove(`${localStorage.getItem('lightMode')}Nav`)
            document.getElementById('chat').classList.remove(`${localStorage.getItem('lightMode')}Chat`)
            document.getElementsByClassName('mess_input')[0].classList.remove(`${localStorage.getItem('lightMode')}Input`)
            document.getElementsByClassName('mess_btn')[0].classList.remove(`${localStorage.getItem('lightMode')}Btn`)
            document.getElementsByClassName('exit')[0].classList.remove(`${localStorage.getItem('lightMode')}Exit`)
            document.getElementsByClassName('palette')[0].style.display = 'none'
            document.getElementsByClassName('modal')[0].classList.add('modalDark')
            document.getElementsByClassName('userContent')[0].classList.remove('lightModal')
            document.getElementsByClassName('userInfo')[0].classList.remove('lightUserInfo')
            document.getElementsByClassName('avatar')[0].classList.remove('lightAvatar')
            document.getElementsByClassName('mailAt')[0].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[1].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[2].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[3].classList.remove('lightMailAt')
            document.getElementsByClassName('times')[0].classList.remove('lightTimes')
            document.getElementsByClassName('mail')[0].classList.remove('lightMail')
            document.getElementsByClassName('close')[0].classList.remove('lightClose')

            items.map(item=>{
                item.classList.remove('lightMess')
                item.childNodes[1].classList.remove('lightText')
                item.childNodes[0].childNodes[1].classList.remove('lightUsername')
                item.childNodes[0].childNodes[0].childNodes[1].classList.remove('lightUsername')
                item.childNodes[0].childNodes[1].classList.remove('timeLight')
            })
        } else {
            document.getElementsByClassName('cont')[0].classList.add(`${localStorage.getItem('lightMode')}Bg`)
            document.getElementsByClassName('nav')[0].classList.add(`${localStorage.getItem('lightMode')}Nav`)
            document.getElementById('chat').classList.add(`${localStorage.getItem('lightMode')}Chat`)
            document.getElementsByClassName('mess_input')[0].classList.add(`${localStorage.getItem('lightMode')}Input`)
            document.getElementsByClassName('mess_btn')[0].classList.add(`${localStorage.getItem('lightMode')}Btn`)
            document.getElementsByClassName('exit')[0].classList.add(`${localStorage.getItem('lightMode')}Exit`)
            document.getElementsByClassName('palette')[0].style.display = 'flex'
            document.getElementsByClassName('modal')[0].classList.remove('modalDark')
            document.getElementsByClassName('userContent')[0].classList.add('lightModal')
            document.getElementsByClassName('userInfo')[0].classList.add('lightUserInfo')
            document.getElementsByClassName('avatar')[0].classList.add('lightAvatar')
            document.getElementsByClassName('mailAt')[0].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[1].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[2].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[3].classList.add('lightMailAt')
            document.getElementsByClassName('times')[0].classList.add('lightTimes')
            document.getElementsByClassName('mail')[0].classList.add('lightMail')
            document.getElementsByClassName('close')[0].classList.add('lightClose')

            items.map(item=>{
                item.classList.add('lightMess')
                item.childNodes[1].classList.add('lightText')
                item.childNodes[0].childNodes[1].classList.add('lightUsername')
                item.childNodes[0].childNodes[0].childNodes[1].classList.add('lightUsername')
                item.childNodes[0].childNodes[1].classList.add('timeLight')
                item.childNodes[0].childNodes[1].classList.remove('lightUsername')

            })



        }
    },1)
    const modeChange = () => {
        let items;

        if(!document.getElementById('chat')){
            return
       }   else{
            items =[...document.getElementById('chat').childNodes]
           
       }
        if(localStorage.getItem('darkMode') === 'false') {
            setUrl(modeDark)
            document.getElementsByClassName('cont')[0].classList.remove('lightBg')
            document.getElementsByClassName('nav')[0].classList.remove('lightNav')
            document.getElementById('chat').classList.remove('lightChat')
            document.getElementsByClassName('mess_input')[0].classList.remove('lightInput')
            document.getElementsByClassName('mess_btn')[0].classList.remove('lightBtn')
            document.getElementsByClassName('exit')[0].classList.remove('lightExit')
            document.getElementsByClassName('palette')[0].style.display = 'none'
            document.getElementsByClassName('modal')[0].classList.add('modalDark')
            document.getElementsByClassName('userContent')[0].classList.remove('lightModal')
            document.getElementsByClassName('userInfo')[0].classList.remove('lightUserInfo')
            document.getElementsByClassName('avatar')[0].classList.remove('lightAvatar')
            document.getElementsByClassName('mailAt')[0].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[1].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[2].classList.remove('lightMailAt')
            document.getElementsByClassName('mailAt')[3].classList.remove('lightMailAt')
            document.getElementsByClassName('times')[0].classList.remove('lightTimes')
            document.getElementsByClassName('mail')[0].classList.remove('lightMail')
            document.getElementsByClassName('close')[0].classList.remove('lightClose')

            items.map(item=>{
                item.classList.remove('lightMess')
                item.childNodes[1].classList.remove('lightText')
                item.childNodes[0].childNodes[0].childNodes[1].classList.remove('lightUsername')
                item.childNodes[0].childNodes[1].classList.remove('timeLight')

            })



            localStorage.setItem('darkMode', true)
        } else {
            setUrl(modeLight)
            document.getElementsByClassName('cont')[0].classList.add('lightBg')
            document.getElementsByClassName('nav')[0].classList.add('lightNav')
            document.getElementById('chat').classList.add('lightChat')
            document.getElementsByClassName('mess_input')[0].classList.add('lightInput')
            document.getElementsByClassName('mess_btn')[0].classList.add('lightBtn')
            document.getElementsByClassName('exit')[0].classList.add('lightExit')
            document.getElementsByClassName('palette')[0].style.display = 'flex'
            document.getElementsByClassName('avatar')[0].classList.add('lightAvatar')
            document.getElementsByClassName('modal')[0].classList.remove('modalDark')
            document.getElementsByClassName('userContent')[0].classList.add('lightModal')
            document.getElementsByClassName('userInfo')[0].classList.add('lightUserInfo')
            document.getElementsByClassName('mailAt')[0].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[1].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[2].classList.add('lightMailAt')
            document.getElementsByClassName('mailAt')[3].classList.add('lightMailAt')
            document.getElementsByClassName('times')[0].classList.add('lightTimes')
            document.getElementsByClassName('mail')[0].classList.add('lightMail')
            document.getElementsByClassName('close')[0].classList.add('lightClose')

            items.map(item=>{
                item.classList.add('lightMess')
                item.childNodes[1].classList.add('lightText')
                item.childNodes[0].childNodes[0].childNodes[1].classList.add('lightUsername')
                item.childNodes[0].childNodes[1].classList.add('timeLight')
            })

            

            localStorage.setItem('darkMode', false )
        }
        
    }
    const modalNav = ()=>{
        setCount(0)
        document.getElementsByClassName('userMod')[0].classList.toggle('unActive')
        let items;
        if(!document.getElementById('chat')){
            return
       }   else{
            items =[...document.getElementById('chat').childNodes]

       }
       items.map(item=>{
            if(item.childNodes[0].childNodes[0].childNodes[0].getAttribute('src') == photo){
               setCount((count)=> count= count+1)
            }
       })

    }
    const seeing = ()=>{
        document.getElementsByClassName('userDisplay')[0].classList.add('activ')
    }
    const nonSeeing = ()=>{
            if(!document.getElementsByClassName('userMod')[0].classList.contains('unActive')){
                return
            }

            document.getElementsByClassName('userDisplay')[0].classList.remove('activ')

    }
    return (
        <div className= 'nav'>
            <p className='logo'>GroupChat</p>
            <UserModal userName= {userName} userAvatar = {photo} userEmail={user.email} userCreated = {user.metadata.creationTime} messagess = {count} setCount= {setCount}/>



            <div className= 'nav_list'>
                <p className='userDisplay '>{user.displayName}</p>
                <img src={photo} width='48px' height='48px' className='navPhoto' onMouseOut={nonSeeing} onMouseOver={seeing} onClick= {modalNav}/>

                <button onClick={modeChange} className='modes' style={{
                    backgroundImage: url
                }} ></button>
                <button className='exit' onClick={() => auth.signOut()}  >Logout</button>
            </div>
        </div>

    );
};

export default Navbar;


