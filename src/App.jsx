import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Header></Header>
      <Body></Body>
      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
