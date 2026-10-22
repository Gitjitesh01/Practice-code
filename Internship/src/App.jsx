import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Demo from './Demo'

function App() {
  const [name, setName] = useState('jitesh')

  return (
    <>
      <h1>Heyyyy... Now we useing React</h1>
      {/* ye direct react mai hame class="" se css supporft nahi karega qki React is a functional component. */}
      {/* <div className='container'>
        <h1>New div</h1>
      </div>
      <div style={{ backgroundColor: 'green' }}>
        <h1>new div</h1>
      </div>
      <p> My Name is Jitesh {name}</p> */}

      
    </>
  )
}

export default App
