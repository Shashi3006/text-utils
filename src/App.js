
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alerts from "./Components/Alerts";
import About from "./Components/About";

import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ebebe0";
      showAlert("Light mode has enabled", "warning");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          aboutTitle="About textUtils"
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode} />} ></Route>
            <Route exact path="/" element = {<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />} ></Route>
          </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
