import React from 'react'
import '../styles/Chat.css'
const Palette = () => {
    
    const themes = ['light', 'red', 'blue', 'white', 'purple']
   
    function changeTheme (e) {
        let items;

        if(!document.getElementById('chat')){
            return
        }else{
            items =[...document.getElementById('chat').childNodes]
           
       }
        if(localStorage.getItem('lightMode') === e.target.classList[1]) return
        localStorage.setItem('lightMode', e.target.classList[1])
        document.getElementsByClassName('cont')[0].classList.add(`${e.target.classList[1]}Bg`)
        document.getElementsByClassName('nav')[0].classList.add(`${e.target.classList[1]}Nav`)
        document.getElementById('chat').classList.add(`${e.target.classList[1]}Chat`)
        document.getElementsByClassName('mess_input')[0].classList.add(`${e.target.classList[1]}Input`)
        document.getElementsByClassName('mess_btn')[0].classList.add(`${e.target.classList[1]}Btn`)
        document.getElementsByClassName('exit')[0].classList.add(`${e.target.classList[1]}Exit`)
        document.getElementsByClassName('palette')[0].style.display = 'flex'
        
        items.map(item=>{
            item.classList.add('lightMess')
            item.childNodes[1].classList.add('lightText')
            
            item.childNodes[0].childNodes[0].childNodes[1].classList.add('lightUsername')
            item.childNodes[0].childNodes[1].classList.add('timeLight')
        })

        for (let i = 0; i < 5; i++) {
            if(e.target.classList[1] === themes[i]){
                continue
            } else {
                document.getElementsByClassName('cont')[0].classList.remove(`${themes[i]}Bg`)
                document.getElementsByClassName('nav')[0].classList.remove(`${themes[i]}Nav`)
                document.getElementById('chat').classList.remove(`${themes[i]}Chat`)
                document.getElementsByClassName('mess_input')[0].classList.remove(`${themes[i]}Input`)
                document.getElementsByClassName('mess_btn')[0].classList.remove(`${themes[i]}Btn`)
                document.getElementsByClassName('exit')[0].classList.remove(`${themes[i]}Exit`)
                document.getElementsByClassName('palette')[0].style.display = 'flex'
            }
            
        }

    }
    return (
        <div className='palette'>
            <div className='el light' onClick= {changeTheme}/>
            <div className='el red' onClick={changeTheme}/>
            <div className='el blue' onClick={changeTheme}/>
            <div className = 'el white' onClick={changeTheme}/>
            <div className='el purple' onClick={changeTheme}/>
        </div>
    )
}
 
export default Palette
