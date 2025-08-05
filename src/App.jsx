import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
