import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import List from './components/list';
// import Heading from './components/Heading'
// import pi, {doublePi,triplePi} from './components/math'      //default values exported can be written in any eay but non default values should be written the same way in which they are exported
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark');    //setMode cannot be assigned directly by = so we used ()
      document.body.style.backgroundColor='#163020';
    } else {
      setMode ('light');
      document.body.style.backgroundColor='white';

    }
  };
  // const[mode,setMode]=useState({
  //   color:"black",
  //   backgroungColor:"white",
  // });
  // const [modeText, setModeText] = useState("Enable Dark mode");
  //   const toggleMode=()=>
  //   {
  //     setMode({
  //       color:"black",
  //       backgroungColor:modeText.includes("dark")?"white":"black",
  //     }); 
  //     if(modeText.includes("dark"))
  //     setModeText("Enable Light Mode");
  //     else
  //     setModeText("Enable Dark Mode");
  //   }


  return (
    <>
    <BrowserRouter basename="/TextConverter">
      <Navbar
        title="TextAnalyser"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar/> */}

      <div className="container my-3">
      <Routes>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/TextConverter" >
        <TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
          </Route>
        </Routes>
         {/* <About/> */}
      </div>
         </BrowserRouter>

      {/* <div>
    <List heading="Items listed"></List>
    </div>

    <div>
      <Heading></Heading>
    </div>

    <div>
      <li>{pi}</li>
      <li> {doublePi()}</li>
      <li>{triplePi()}</li> 
    </div> */}
    </>
  );
}

export default App;
