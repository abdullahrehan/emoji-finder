import React from 'react'
import Tabs from '../ApiFiles/Tabs'
import './LinksTabs.css'

function LinksTabs({ input, setInput , darktheme }) {

  const clickIcon = (Data) => {

    setInput(Data.title);

  }


  return (
    <div className='emoji-tabs-section'>
      <div className='emoji-tabs-div'>

        {Tabs.map((Data) =>
          <Data.element 
          style={{ color: input === Data.title ? "aqua" : darktheme?"white":"dimgrey",width:"85px" }}
                className="tabs-icons"
                onClick={() => clickIcon(Data)} 
                />
        )}

      </div>
    </div>
  )
}

export default LinksTabs
