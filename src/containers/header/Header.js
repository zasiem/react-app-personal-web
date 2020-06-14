import React from 'react';

import './header.css';
import Navbar from '../../components/headers/Navbar';
import Profile from '../../assets/images/profile.jpg';

function Header() {

  return (
    <div id="header" className="container-fluid bg-grey p-5">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <img src={Profile} className="rounded-circle" height="450px" width="370px"/>
        </div>
        <div className="col-sm-4 text-left description-container">
          <p className="font-weight-bold">Hello, I'm</p>
          <h1 className="font-weight-bold">Erza Putra Albasori</h1>
          <p>Interested in full-stack software development, especially web app. Familiar with html, css, php, java, android, sql, framework bootstrap and laravel. Still learn about reactjs and android pattern.</p>
          <a className="btn btn-link text-dark" href="https://www.linkedin.com/in/erzaputra/" target="_blank"><i className='fa fa-linkedin'></i></a>
          <a className="btn btn-link text-dark" href="https://github.com/zasiem" target="_blank"><i className='fa fa-github'></i></a>
          <a className="btn btn-link text-dark" href="https://gitlab.com/erzaputra" target="_blank"><i className='fa fa-gitlab'></i></a>
          <a className="btn btn-link text-dark" href="https://instagram.com/erzaputra_" target="_blank"><i className='fa fa-instagram'></i></a>
          <a className="btn btn-link text-dark" href="https://facebook.com/zasiem" target="_blank"><i className='fa fa-facebook'></i></a>
          <hr className=""/>
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=contact@erzaputra.com&body=describe%20your%20project%20idea%20or%20opportunities" className="btn btn-danger mr-3" target="_blank">Hire Me</a>
          <a href="https://www.linkedin.com/in/erzaputra/" className="btn btn-outline-danger" target="_blank">Portfolio</a>
        </div>
      </div>
    </div>
  );

}
export default Header;
