import {  Route, Routes } from "react-router-dom"; 

import Header from "./component/Header" 
import Home from "./component/Home"
import "./styles/App.scss"




const  App=()=> {
  return ( 
    <>
 
        <Routes>     
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>} /> 
      </Route>  
      </Routes>
    </>
  );
}

export default App;