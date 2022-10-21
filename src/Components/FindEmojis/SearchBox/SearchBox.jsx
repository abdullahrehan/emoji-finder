import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdOutlineModeNight } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import "./SearchBox.css"

function SearchBox({input,setInput, darktheme ,setTheme}) {

  const lightMode={backgroundColor:"lightyellow",color:"black"}
  
  const DarkMode={backgroundColor:"#333",color:"white"}

  return (
    
    <div className='emojifinder-search-section'>
  
      <div className='emojifinder-search-div' style={darktheme?DarkMode:lightMode}>
  
        <div className='search-icon' ><BiSearch size={25} style={darktheme?DarkMode:lightMode} /></div>
  
        <input className='emojifinder-search-input' style={darktheme?DarkMode:lightMode} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search" />
        
        <div className='mode-div'>

        {
          darktheme ? 
          
            <BiSun size={22}  className="mode-icon" onClick={()=>setTheme("light")} />
        
          :
        
            <MdOutlineModeNight size={22}  className="mode-icon" onClick={()=>setTheme("dark")}/>
        }
        </div>
  
      </div >
  
    </div>
  
  )
}

export default SearchBox
