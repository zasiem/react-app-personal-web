import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Skills from '../components/contents/skills/Skills';

function App() {

//returning jsx
 return (
  <div className="App">
    <Header/>
    <section id="skills">
      <Skills/>
    </section>
  </div>
  );

}

export default App;
