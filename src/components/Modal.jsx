import React from 'react'

const Modal = ({value, setValue}) => {
    const addEmoji = (e) => {
        setValue(value=>value=value+e.target.innerHTML)
    }
    const stop = (e)=> {
        e.stopPropagation()

    }

    return (
        <div className="modal unActive" onClick={stop}>
            <div className='emoji' onClick={addEmoji}>😂</div>
            <div className='emoji' onClick={addEmoji}>🤣</div>
            <div className='emoji' onClick={addEmoji}>🤷‍♂️</div>
            <div className='emoji' onClick={addEmoji}>🤦‍♂️</div>
            <div className='emoji' onClick={addEmoji}>❤️</div>
            <div className='emoji' onClick={addEmoji}>😍</div>
            <div className='emoji' onClick={addEmoji}>😘</div>
            <div className='emoji' onClick={addEmoji}>👍</div>
            <div className='emoji' onClick={addEmoji}>😎</div>
            <div className='emoji' onClick={addEmoji}>🎶</div>
            <div className='emoji' onClick={addEmoji}>😅</div>
            <div className='emoji' onClick={addEmoji}>🤗</div>
            <div className='emoji' onClick={addEmoji}>😊</div>
            <div className='emoji' onClick={addEmoji}>😢</div>
            <div className='emoji' onClick={addEmoji}>🤩</div>
            <div className='emoji' onClick={addEmoji}>🙄</div>
            <div className='emoji' onClick={addEmoji}>😡</div>
            <div className='emoji' onClick={addEmoji}>🤡</div>
            <div className='emoji' onClick={addEmoji}>😈</div>
            <div className='emoji' onClick={addEmoji}>😒</div>
            <div className='emoji' onClick={addEmoji}>🙂</div>
            <div className='emoji' onClick={addEmoji}>😭</div>
            <div className='emoji' onClick={addEmoji}>😮</div>
            <div className='emoji' onClick={addEmoji}>😑</div>


        </div>
    )
}

export default Modal
