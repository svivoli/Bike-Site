import React from 'react';

function Navbar() {
    return(
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #sticky-navbar">

      <nav class="large-nav uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">

          <div>
            <h3>Helmet Insurance</h3>
            <h5>For Riders. By Riders</h5>
          </div>

        </div>

        <div class="uk-navbar-right">

          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="index.html">Home</a></li>
            <li><a href="signup.html">Get Started</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

        </div>

      </nav>

      <nav class="minified-nav uk-navbar uk-navbar-container">
        <div href="#offcanvas-slide" class="uk-navbar-left" uk-toggle>
          <a class="hambuger uk-navbar-toggle" uk-navbar-toggle-icon href="#"></a>
          <h3 class="min-logo">Helmet</h3>
        </div>
        <div id="offcanvas-slide" uk-offcanvas>
          <div class="uk-offcanvas-bar">

            <ul class="uk-nav uk-nav-default">
              <li class="uk-active"><a href="index.html">Home</a></li>
              <li><a href="signup.html">Get Started</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
    )
};

export default Navbar;