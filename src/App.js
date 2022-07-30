import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null)
  const toggleMode=() => {
    if(mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor ="#223759"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor ="white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
