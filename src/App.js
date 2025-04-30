import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
// import ProjectTimeline from './components/ProjectTimeline';
import Skills from './components/Skills';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          {/* <ProjectTimeline /> */}
          <Skills />
          <Hobby />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;