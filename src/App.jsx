// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  )
}

export default App
