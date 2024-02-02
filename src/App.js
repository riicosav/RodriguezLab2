import React, { useState } from 'react';
import './App.css';
import Footer from "./Footer.js";
import Mainbody from "./Mainbody.js";
import Navhead from "./Navhead.js";



function App() {
  return (
    <div>
      <Navhead />
      <Mainbody />
      <Footer />
    </div>
   
  );
}

export default App;
