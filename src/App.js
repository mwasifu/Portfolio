import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Home from './pages/Home';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
