import React from 'react'
import EmojiRows from '../EmojiRows/EmojiRows'
import filterEmoji from '../Functions/filterEmoji'
import "./SearchResults.css"

function SearchResults({ input, inputHasValue, titles, setSaveEmoji, RecentEmojiData, setClearRecentEmojis ,setinput ,darktheme }) {

  const noRecentEmoji = RecentEmojiData.length == 0 ? true : false

  return (

  <div className='emojis-result-div'>

      <div>

        <div style={{ display: noRecentEmoji || inputHasValue ? "none" : "flex" , color:darktheme?"#c0c0c0":"darkslategrey"}} className='recent-emojis-title' >

          <div>recent</div>
          <div className='clear-recent-emojis-div' onClick={() => setClearRecentEmojis(true)}>Clear</div>

        </div>

        <div className='recent-emojis-div'>

          {inputHasValue ? null : RecentEmojiData.map((data) =>

            <EmojiRows data={data} setSaveEmoji={(data) => setSaveEmoji(data)} setinput={(data)=>setinput(data)}/>

          )}

        </div>

      </div>

      <div>

        {titles.map((data) =>
         
          <div className='emojis-title-div' style={{color:darktheme?"#c0c0c0":"darkslategrey"}}>
          
            {data}
          
            <div className='emojifinder-results-div'>
          
              {
                filterEmoji(inputHasValue ? input : data, 10).map((data) =>

                  <EmojiRows data={data} setSaveEmoji={(data) => setSaveEmoji(data)} setinput={(data)=>setinput(data)}/>
                )
              }
          
            </div>
          
          </div>

        )}

      </div>
 
    </div>

  )
}

export default SearchResults
