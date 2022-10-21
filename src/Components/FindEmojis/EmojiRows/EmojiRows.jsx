import React from 'react'
import "./EmojiRows.css"

function EmojiRows({ data , setSaveEmoji , setinput}) {

    const source = `//cdn.jsdelivr.net/emojione/assets/png/${data.symbol.codePointAt(0).toString(16)}.png`

    return (
        <div className='emojifinder-results-row'>

            <div className='emojifinder-results-Emoji-Image-div'>

                <img
                    className='emojifinder-results-Emoji-Image'
                    src={source} 
                    onClick={()=>{
                        setSaveEmoji(data)
                        setinput(data.symbol)
                    }}
                
                />
     
            </div>
     
        </div>
    )
}

export default EmojiRows
