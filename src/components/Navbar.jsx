import React, { Fragment } from 'react'
import logo from '../images/logo.jpg'

export default function Navbar () {
  return (

 <Fragment>
<section id="header" className="fixed-top">
<nav className="navbar navbar-expand-lg bg-White ">
  <div className="container-fluid">
    <div className="img-logo">
    <a className="navbar-brand" href="#hero"><img src={logo} alt="" className="img-fluid" /></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#hero">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#news">News</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#team">Founder</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contacts</a>
        </li>
      </ul>
      </div>
  </div>
</nav>
</section>

</Fragment>
  )
}
