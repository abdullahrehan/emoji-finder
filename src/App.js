import Input from './Components/InputField/Input'
import Signatures from './Images/signatures.png'
import { useTypewriter } from 'react-simple-typewriter'
import './App.css';

function App() {

  const [text] = useTypewriter({
  
    words: ["😁", '😂', '😇', '😠'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  
  })

  return (
    <div className="App">
      
      <div className='react-emoji-keyboard'>React Emoji Keyboard</div>
      
      <div className='typewriter-div'> Use your Favourite Emojis  {text}</div>
      
      <Input className='input-div' />
      
      <div className='signature-div'>

        <img src={Signatures} className='signature-image' />
      
      </div>

    </div>
  );
}

export default App;
