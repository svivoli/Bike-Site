import React from 'react';

function About() {
    return (
        <div class="about">
            <h4>Tell us about your bike!</h4>
            <form class="uk-form-horizontal uk-margin-large">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-horizontal-select">Make</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="make form-horizontal-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-horizontal-select">Model</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="model form-horizontal-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-horizontal-select">Year</label>
                    <div class="uk-form-controls">
                        <select class="uk-select" id="year form-horizontal-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>
                </div>
            </form>
            <div class="row uk-margin">
                <div class="col-md-6">
                    <p>Estimated Value:</p>
                </div>
                <div class="col-md-4">
                    <div class="uk-inline">
                        <span class="uk-form-icon">$</span>
                        <input class="value uk-input" type="text" name="value" value=""></input>
                    </div>
                </div>
            </div>
            <div class="terms">
                <p>Terms of Service <a href="#">View</a></p>
                <p>Privacy Policy <a href="#">View</a></p>
                <label><input class="agree uk-checkbox" type="checkbox"></input> Agree to Terms of Service & Privacy
                        Policy*</label>
            </div>
            <a class="next1-btn uk-button uk-button-default">Next</a>
        </div>
    )
};

export default About;