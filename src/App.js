//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import About from './frontend/About/About';
import Skills from './frontend/Skills/Skills';
import Projects from './frontend/Projects/Projects';
import Intro from './frontend/Intro/Intro';
import Contact from './frontend/Contact/Contact'
import Homepage from './frontend/Homepage'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/Intro" element={<Intro />}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Skills" element={<Skills />}></Route>
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  </Router>
  
  );

}

export default App;