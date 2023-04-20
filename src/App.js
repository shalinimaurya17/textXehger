import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
function App() {
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
    }
  };
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Shalini"
          home="About Us"
          services="Home Services"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/about'
            element={<About mode={mode} />}/>

          <Route exat path='/'
            element={<Textform
              heading="Enter Text To Convert"
              showalert={showalert}
              mode={mode}
            />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App; 
