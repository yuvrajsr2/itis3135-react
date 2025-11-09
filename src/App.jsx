import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import Contract from './pages/Contract.jsx'
import Introduction from './pages/Introduction.jsx'




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/contract' element={<Contract />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
