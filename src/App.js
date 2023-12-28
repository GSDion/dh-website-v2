//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import About from './frontend/About/About';
import Home from './frontend/Home/Home';
import Projects from './frontend/Projects/Projects';
import Experience from './frontend/Experience/Experience';
import Contact from './frontend/Contact/Contact'

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/Experience" element={<Experience />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
