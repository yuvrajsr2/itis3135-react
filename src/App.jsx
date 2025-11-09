import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import Contract from './pages/Contract.jsx'
import Introduction from './pages/Introduction.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'




function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/contract' element={<Contract />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
