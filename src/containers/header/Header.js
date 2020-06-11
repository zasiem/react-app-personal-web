import React from 'react';

import './header.css';
import Navbar from '../../components/headers/Navbar';
import Profile from '../../assets/images/profile.jpg';

function Header() {

  return (
    <div id="header" className="container-fluid bg-grey p-5">

      <div className="row justify-content-center">
        <div className="col-sm-4">
          <img src={Profile} className="rounded-circle" height="420px" width="350px"/>
        </div>
        <div className="col-sm-4 text-left description-container">
          <p className="font-weight-bold">Hello, I'm</p>
          <h1 className="font-weight-bold">Erza Putra Albasori</h1>
          <p>Interested in front-end development, especially web. Familiar with html, css, php, java, framework bootstrap and laravel. Still learn about reactjs and android native.</p>
          <hr className=""/>
          <a href="#contact" className="btn btn-danger mr-3">Hire Me</a>
          <a href="#contact" className="btn btn-outline-danger">Portfolio</a>
        </div>
      </div>
    </div>
  );

}
export default Header;
