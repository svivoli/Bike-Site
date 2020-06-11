import React from 'react';

function BikeInfo() {
    return (
        <div class="bike-info">
        <h4>What do you use your bike for?</h4>
        <div class="uses uk-margin-large">
            <label><input class="uk-checkbox" type="checkbox"></input> Commuting</label>
            <label><input class="uk-checkbox" type="checkbox"></input> Pleasure</label>
            <label><input class="uk-checkbox" type="checkbox"></input> Exercise</label>
            <label><input class="uk-checkbox" type="checkbox"></input> Racing</label>
            <label><input class="uk-checkbox" type="checkbox"></input> All of the above</label>
            <label><input class="uk-checkbox" type="checkbox"></input> Other</label>
        </div>
        <h4>Have you ever had a bike stolen?</h4>
        <div class="row justify-content-md-center uk-margin-large">
            <div class="up col-md-4">
                <i class="up far fa-thumbs-up" aria-hidden="true"></i>
            </div>
            <div class="down col-md-4">
                <i class="down far fa-thumbs-down" aria-hidden="true"></i>
            </div>
        </div>
        <h4>List your bike clubs below</h4>
        <div class="uk-margin">
            <div class="club-list"></div>
            <div class="row">
                <div class="col-md-10">
                    <input class="clubs uk-input" onfocus="this.value=''" type="text" name="value" value=""></input>
                </div>
                <div class="col-md-2 uk-margin">
                    <button class="club-btn uk-button uk-button-default">+</button>
                </div>
            </div>
        </div>
        <a class="next3-btn uk-button uk-button-default" href="signup4.html">Next</a>
    </div>
    )
};

export default BikeInfo;