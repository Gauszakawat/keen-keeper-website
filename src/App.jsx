import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navber from './componen/Navber'
import Footer from './componen/Footer'
import Home from './componen/Pages/Home'
import Timeline from './componen/Pages/Timeline'
import Stats from './componen/Pages/Stats'

function App() {
    const [color, setcolor] = useState('activ');
  

  return (
    <>
    <div className='w-full '>
      <Navber color={color} setcolor={setcolor} ></Navber>
      
      {
        color  === 'activ' && <Home></Home>
      }
      {
        color === 'timeline' && <Timeline></Timeline>
      }
      {
        color === 'stats'&& <Stats></Stats>
      }
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
