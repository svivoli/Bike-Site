import React, { useState } from 'react';
import API from '../../utils/API';

function About() {
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [value, setValue] = useState();
    const [checked, setChecked] = useState(false);

    function handleMakeChange(event) {
        if (event.target.name == 'make') {
            setMake(event.target.value);
        }
    }

    function handleModelChange(event) {
        if (event.target.name == 'model') {
            setModel(event.target.value);
        }
    }

    function handleYearChange(event) {
        if (event.target.name == 'year') {
            setYear(event.target.value);
        }
    }

    function handleValueChange(event) {
        if (event.target.name == 'value') {
            setValue(event.target.value);
        }
    }

    function handleCheck(event) {
        if (event.target.name == 'agree') {
            setChecked(true)
        }
    }

    function handleClick() {
        let estimate = document.getElementsByclassName('estimate');
        console.log(isNaN(estimate.value));
        if (estimate.value === '' || estimate.value == ' ') {
            alert('Please estimate the value of your bike.')
        }
        if (!isNaN(estimate.value)) {
            alert('Estimated value must be a numerical value.')
        }
        if (checked == false) {
            alert('You must agree to the Terms of Service & Privacy Policy to proceed.');
        }
        if (isNaN(estimate.value) && estimate.value != '' && estimate.value != ' ' && checked == true) {
            handlePost();
            document.location.href = '/signup2';
        }
    }


    function handlePost() {
        console.log("HEY FROM HANDLEPOST")
        API.createBike({
            make: make,
            model: model,
            year: year,
            estvalue: value
        })
            .then(console.log("Bike saved to database."))
            .catch(err => console.log(err));
    };

    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="about">
                    <h4>Tell us about your bike!</h4>
                    <div className="row uk-margin">
                        <div className="col-md-4">
                            <p>Make:</p>
                        </div>
                        <div className="col-md-8">
                            <input
                                className="uk-input uk-form-width-large"
                                type="text"
                                name="make"
                                onChange={handleMakeChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="row uk-margin">
                        <div className="col-md-4">
                            <p>Model:</p>
                        </div>
                        <div className="col-md-8">
                            <input
                                className="uk-input uk-form-width-large"
                                type="text"
                                name="model"
                                onChange={handleModelChange}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="row uk-margin">
                        <div className="col-md-4">
                            <p>Year:</p>
                        </div>
                        <div className="col-md-8">
                            <input
                                className="uk-input uk-form-width-large"
                                type="text"
                                name="year"
                                onChange={handleYearChange}
                            >
                            </input>
                        </div>
                    </div>
                    {/* <form className="uk-form-horizontal uk-margin-large">
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-horizontal-select">Make</label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    id="make form-horizontal-select"
                                    name="make"
                                    value={make}
                                    onChange={handleMakeChange}>
                                    <option value="Select">Select</option>
                                    <option value="01">Option 01</option>
                                    <option value="02">Option 02</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-horizontal-select">Model</label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    id="model form-horizontal-select"
                                    name="model"
                                    value={model}
                                    onChange={handleModelChange}>
                                    <option value="Select">Select</option>
                                    <option value="01">Option 01</option>
                                    <option value="02">Option 02</option>
                                </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-horizontal-select">Year</label>
                            <div className="uk-form-controls">
                                <select
                                    className="uk-select"
                                    id="year form-horizontal-select"
                                    name="year"
                                    value={year}
                                    onChange={handleYearChange}>
                                    <option value="Select">Select</option>
                                    <option value="01">Option 01</option>
                                    <option value="02">Option 02</option>
                                </select>
                            </div>
                        </div>
                    </form> */}
                    <div className="row uk-margin">
                        <div className="col-md-6">
                            <p>Estimated Value:</p>
                        </div>
                        <div className="col-md-4">
                            <div className="uk-inline">
                                <span className="uk-form-icon">$</span>
                                <input className="estimate uk-input" type="text" name="value" onChange={handleValueChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="terms">
                        <p>Terms of Service <a href="#">View</a></p>
                        <p>Privacy Policy <a href="#">View</a></p>
                        <label><input className="agree uk-checkbox" type="checkbox" name="agree" checked={checked} onClick={handleCheck}></input> Agree to Terms of Service & Privacy
                        Policy*</label>
                    </div>
                    <button className="next1-btn uk-button uk-button-default" onClick={handleClick}>Next</button>
                </div>
            </div>
        </section>
    )
};

export default About;