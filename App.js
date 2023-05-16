import React, { Component } from 'react';
import './App.css';
import Navbar from "./NavBar" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./IMG_6691.jpeg"





const App =()=> {
  let firstname = "Eya"
    let lastname = "Laaribi"
  return(
    
      
      <div className="App">
      <Navbar/>
      <img src={Image} style={{ height: "250px" }} />
          

      
      </div>


        
          

  )
}
export default App ;