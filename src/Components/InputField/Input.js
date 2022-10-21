import React, { useState } from 'react'
import { BsEmojiLaughing } from 'react-icons/bs';
import EmojiMain from '../FindEmojis/EmojiMain/EmojiMain'
import "./Input.css"

function Input() {
   
    const [callSearchEmoji, setCallSearchEmoji] = useState(false)
    const [input, setinput] = useState("")

    return (
   
        <div className='input-field-section'>
        
            <div className='input-field-div'>
        
                <input className='input-field' placeholder='write ...' onChange={(e) => setinput(e.target.value)} value={input} />
        
                <BsEmojiLaughing size={20} className="emoji-icon" onClick={() => setCallSearchEmoji(!callSearchEmoji)} />
        
            </div>
        
            <div style={{ display: callSearchEmoji ? "block" : "none", marginTop: "10px" }}>
        
                <EmojiMain setinput={(data) => setinput(input + data)} />
        
            </div>
        
        </div>
    )
}

export default Input
