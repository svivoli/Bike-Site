import React from 'react';


function BikeInfo() {
    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="bike-info">
                    <h4>What do you use your bike for?</h4>
                    <div className="uses uk-margin-large">
                        <label><input className="uk-checkbox" type="checkbox"></input> Commuting</label>
                        <label><input className="uk-checkbox" type="checkbox"></input> Pleasure</label>
                        <label><input className="uk-checkbox" type="checkbox"></input> Exercise</label>
                        <label><input className="uk-checkbox" type="checkbox"></input> Racing</label>
                        <label><input className="uk-checkbox" type="checkbox"></input> All of the above</label>
                        <label><input className="uk-checkbox" type="checkbox"></input> Other</label>
                    </div>
                    <h4>Have you ever had a bike stolen?</h4>
                    <div className="row justify-content-md-center uk-margin-large">
                        <div className="up col-md-4">
                            <i className="up far fa-thumbs-up" aria-hidden="true"></i>
                        </div>
                        <div className="down col-md-4">
                            <i className="down far fa-thumbs-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <h4>List your bike clubs below</h4>
                    <div className="uk-margin">
                        <div className="club-list"></div>
                        <div className="row">
                            <div className="col-md-10">
                                <input className="clubs uk-input" onfocus="this.value=''" type="text" name="value" value=""></input>
                            </div>
                            <div className="col-md-2 uk-margin">
                                <button className="club-btn uk-button uk-button-default">+</button>
                            </div>
                        </div>
                    </div>
                    <a className="next3-btn uk-button uk-button-default" href="/signup4">Next</a>
                </div>
            </div>
        </section>
    )
};

export default BikeInfo;