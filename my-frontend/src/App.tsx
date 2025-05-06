import { useState } from 'react'
import Home from './pages/Home'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home message="Hi, I'm Jensen." />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
