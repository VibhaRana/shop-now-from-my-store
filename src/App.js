import React, {useState, useEffect} from 'react'
import "./App.css";
 import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import Home from "../src/routes/home/Home";
import Navigation from '../src/routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication';

function App() {
  const[backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch('/').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
    
  //   )

  // }, [])
  return (
  
    <div>
      
     <Routes> 
    
    <Route path = '/' element={<Navigation />}>
     <Route index element={<Home />}/>
     <Route path='/auth' element={<Authentication />}/>
     </Route>
   </Routes>  
   </div>
   
  );
  }


export default App;
