import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode , setMode]= useState('light');
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#051c34";
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
    }
  }
  const [alert, setalert] = useState(null);

    const showAlert = (message,type)=>{
        setalert({
          msg:message,
          type:type
      })
      setTimeout(() => {
          setalert(null);
      }, 1500);
    }
  return (
<>
  {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>    */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} alert={alert}/>} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} alert={alert}/>
      </div>
   {/* </Router> */}
</>
  );
}

export default App;


