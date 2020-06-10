import React from 'react';
import './header.css';

function Header() {

  return (
    <div id="header" className="container-fluid bg-light p-5">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="font-weight-bold text-dark">Hi, Strangers</h1>
        </div>
      </div>
    </div>
  );

}

export default Header;
