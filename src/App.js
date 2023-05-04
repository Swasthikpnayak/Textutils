import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm'; 
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {
  const [Mode, setMode] = useState('light');//Wether Dark Mode Is Unable or Not
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) =>{
        setAlert({
          msg : message,
          type : type,
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }
  const toggleMode = ()=>{
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success");
      document.title = 'TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success");
      document.title = 'TextUtils-light Mode';
    }
  }
  return (
  <>
<Router>
<Navbar  title="TextUtils"  Mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-4">
<Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
        </Switch>
    {/* </Switch>
        <Switch>
          <Route exactpath="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" Mode={Mode}/>        
          </Route>
        </Switch> */}
  </div>
  </Router>
  </>
  );

}


export default App;
