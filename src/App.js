import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Styles
import './App.css';

// Import Components
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/pages/About';
import Alerts from './components/layout/Alerts';
import Contact from './components/pages/Contact';

// Function to vaildate token
import setAuthToken from './utils/setAuthToken';

// Import Context State
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

// Call the function setAuthtoken if token is exist in request headers
if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="conatiner">
                <Alerts />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/register' element={<Register />} />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/contact' element={<Contact />} />
                </Routes>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
