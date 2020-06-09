import React from 'react';

function Ride() {
    return(
        <section class="ride">
        <div class="ride-title">
          <div class="break2">
          </div>
          <h1>Ride With Helmet.</h1>
  
        </div>
        <div class="cards row justify-content-md-center justify-content-sm-center">
          <div class="col-lg-2 ccol-md-8 col-sm-8 col-xs-8">
            <div class="card cy">
              <h5>Low Cost</h5>
              <p>By grouping riders not only are you able to save tons, but your premiums will never increase.</p>
              <p class="arrow1">&#10230;</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-8 col-sm-8 col-xs-8">
            <div class="card cr">
              <h5>Hassle-Free</h5>
              <p>Be back on a bike within 24 hours. That's our promise. No one deserves to miss a day of riding!
              </p>
              <p class="arrow">&#10230;</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-8 col-sm-8 col-xs-8">
            <div class="card cb">
              <h5>Just Protection!</h5>
              <p>No bells or whistles, just good ol' coverage. We do not sell any unnecessary features.</p>
              <p class="arrow">&#10230;</p>
            </div>
          </div>
          <div class="col-lg-2 col-md-8 col-sm-8 col-xs-8">
            <div class="card cg">
              <h5>Community</h5>
              <p>We make insurance fun. Invite your friends! Plan events! Get the most out of your experience.</p>
              <p class="arrow">&#10230;</p>
            </div>
          </div>
        </div>
  
        <button class="story-btn uk-button uk-button-default">Our Story</button>
      </section>
    )
};

export default Ride;