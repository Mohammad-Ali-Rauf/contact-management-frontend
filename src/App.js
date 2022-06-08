import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Styles
import './App.css';

// Import Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

// Import Context State
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <>
            <Navbar />
            <div className="conatiner">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
              </Routes>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
