import React from 'react';
import './App.css';
import { Footer } from './component/Footer';
import { Login } from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Blogcart } from './component/BlogCart';

function App() {
  return (
    <div className="App">

      <Router >
        <Routes >
          <Route path="/login" element={<Login />} />
          <Route path="/blogCart" element={<Blogcart />} />
          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
