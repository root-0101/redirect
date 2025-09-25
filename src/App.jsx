import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import DemoPage from './components/Demo'
import './App.css'
import ErrorPage from './components/error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Your OAuth Route */}
        <Route path="/authentication/89746440489/oauth/authorize/" element={<ErrorPage/>} />
        
        {/* Optional: catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
