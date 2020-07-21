import React from 'react';
import { NavLink } from 'react-router-dom'; 
import MenuContainer from '../MenuContainer';

function Navbar() {
  return (
    <div>
      <div uk-sticky="sel-target: .nav-container; cls-active: uk-navbar-sticky; bottom: #sticky-navbar">
        <div className="row nav-container">
          <div className="col-md-8">

            <div className="logo-div">
              <h3>Helmet Insurance</h3>
              <h5>For Riders. By Riders</h5>
            </div>

          </div>
          <div className="col-md-4">

            <ul className="uk-navbar-nav">
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/"
              >Home</NavLink></li>
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/signup"
              >Get Started</NavLink></li>
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/about"
              >About</NavLink></li>
              <li><NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/blog"
              >Blog</NavLink></li>
            </ul>

          </div>
        </div>
      </div>

      <div>
        <MenuContainer ><h1>Menu</h1></MenuContainer>
      </div>

    </div>
    // <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #sticky-navbar">

    //   <nav className="large-nav uk-navbar-container" uk-navbar>

    //     <div className="uk-navbar-left">

    //       <div>
    //         <h3>Helmet Insurance</h3>
    //         <h5>For Riders. By Riders</h5>
    //       </div>

    //     </div>

    //     <div className="uk-navbar-right">

    //       <ul className="uk-navbar-nav">
    //         <li className="uk-active"><a href="/">Home</a></li>
    //         <li><a href="/signup">Get Started</a></li>
    //         <li><a href="#">About</a></li>
    //         <li><a href="#">Blog</a></li>
    //       </ul>

    //     </div>

    //   </nav>

    // <nav className="minified-nav uk-navbar uk-navbar-container">
    //   <div className="uk-navbar-left">
    //     <a className="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle href="#offcanvas-slide"></a>
    //     <h3 className="min-logo">Helmet</h3>
    //   </div>
    // </nav>

    // <div id="offcanvas-slide" uk-offcanvas>
    //   <div className="uk-offcanvas-bar">

    //     <ul className="uk-nav uk-nav-default">
    //       <li className="uk-active"><a href="index.html">Home</a></li>
    //       <li><a href="#">Get Started</a></li>
    //       <li><a href="#">About</a></li>
    //       <li><a href="#">Blog</a></li>
    //     </ul>

    //   </div>
    // </div>

    // </div>
  )
};

export default Navbar;