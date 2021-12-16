import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Playground from "./pages/Playground";

import history from "./components/utils/history";

function App() {
  return (
    <Router history={history}>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
