import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectTimeline from './components/ProjectTimeline';
import Skills from './components/Skills';
// import Hobby from './components/Hobby';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientButton from './components/GradientButton';
import './App.css';

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <GradientButton onClick={() => navigate('/timeline')}>
            View Project Timeline
          </GradientButton>
        </div>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/timeline" element={<ProjectTimeline />} />
      </Routes>
    </Router>
  );
}

export default App;