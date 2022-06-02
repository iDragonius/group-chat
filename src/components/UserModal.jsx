import React from 'react';

const UserModal = ({userName, userAvatar, userEmail, userCreated,messagess}) => {

    const close = () => {
        document.getElementsByClassName('userDisplay')[0].classList.remove('activ')
        document.getElementsByClassName('userMod')[0].classList.add('unActive')
    }
    const closeOther = () => {
        document.getElementsByClassName('userMod')[0].classList.add('unActive')
        document.getElementsByClassName('userDisplay')[0].classList.remove('activ')
    }

    return (
        <div className='userMod unActive ' onClick={closeOther}>
            <div className='userContent' onClick={(e)=>e.stopPropagation()}>
                <div className='mainInfo'>
                    <img src={userAvatar} alt="avatar" className="avatar" width='90px' height='90px'/>
                    <p className="userInfo">{userName} </p>
                </div>
                <div className='infos'>
                    <p className="mail"><span className='mailAt'>Email:</span>  {userEmail}</p>
                    <p className='verify'> <span className={'mailAt'}>Email verified:</span> Verified</p>
                    <p className='times'> <span className='mailAt'>Created at:</span> {userCreated}</p>
                    <p className={'messagess'}><span className={'mailAt'}>Total messages:</span> {messagess} </p>
                </div>
                <button className="close" onClick={close}>Close</button>
            </div>
        </div>
    );
};

export default UserModal;
