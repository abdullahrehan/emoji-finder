import React, { useState, useEffect } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import LinksTabs from '../LinksTabs/LinksTabs'
import SearchResults from '../SearchResults/SearchResults'
import Titles from '../ApiFiles/Titles.json'
import "./EmojiMain.css"

function EmojiMain({setinput}) {

  const [input, setInput] = useState("")
  const [titles, setTitles] = useState(Titles)
  const [saveEmoji, setSaveEmoji] = useState()
  const [RecentEmojiData,setRecentEmojiData] = useState(JSON.parse(localStorage.getItem('recentEmoji')));
  const [clearRecentEmojis, setClearRecentEmojis] = useState(false)
  const [theme, setTheme] = useState("dark")

  const inputHasValue = !input == "" || !input == " ";
  const darktheme=theme=="dark"?true:false
  let recentEmojisArray;


  if (RecentEmojiData == undefined || RecentEmojiData == null) { 
    
    localStorage.setItem('recentEmoji', JSON.stringify([])) 
  
  }
  

  useEffect(() => {

    if (inputHasValue) {
      
      setTitles([" "])
    
    }
    
    else {
    
      setTitles(Titles)
    
    }

  }, [input])


  useEffect(() => {

    if (RecentEmojiData !== undefined && RecentEmojiData !== null && saveEmoji !== undefined) {

      const emojiAlreadySaved = RecentEmojiData.findIndex((data) => data.title === saveEmoji.title) == -1 ? false : true

      if (!emojiAlreadySaved) {

        recentEmojisArray = [...RecentEmojiData, saveEmoji];
     
        localStorage.setItem('recentEmoji', JSON.stringify(recentEmojisArray));
     
        setRecentEmojiData(JSON.parse(localStorage.getItem('recentEmoji')))

      }

    }

  }, [saveEmoji]);

  
  useEffect(()=>{

    if(clearRecentEmojis)
    {
  
      localStorage.clear();
  
      setRecentEmojiData([])
  
      setClearRecentEmojis(false)
  
    }

  },[clearRecentEmojis])
  


  return (
    <div className='emoji-finder-main-div' style={{backgroundColor:darktheme?"#222":"whitesmoke"}}>

      <SearchBox input={input} setInput={(value) => setInput(value)} darktheme={darktheme} setTheme={(data)=>setTheme(data)}/>
     
      <LinksTabs input={input} setInput={(value) => setInput(value)} darktheme={darktheme}/>
     
      <SearchResults 
        input={input}
        inputHasValue={inputHasValue}
        titles={titles} 
        setSaveEmoji={(data) => setSaveEmoji(data)}
        RecentEmojiData={RecentEmojiData}
        setClearRecentEmojis={(data=>setClearRecentEmojis(data))}
        setinput={(data)=>setinput(data)}
        darktheme={darktheme}
        />


    </div>
  )
}

export default EmojiMain
