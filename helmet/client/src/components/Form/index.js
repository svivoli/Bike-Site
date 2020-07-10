import React, { useState } from 'react';
import API from '../../utils/API';

function Form() {
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [value, setValue] = useState();
    const [checked, setChecked] = useState(false);
    const [often, setOften] = useState();

    function handleMakeChange(e) {
            setMake(e.target.value);
    }

    function handleModelChange(e) {
            setModel(e.target.value);
    }

    function handleYearChange(e) {
            setYear(e.target.value);
    }

    function handleValueChange(e) {
            setValue(e.target.value);
    }

    function handleOftenChange(event) {
        setOften(event.target.value);
    }

    function handleCheck() {
            setChecked(true);
    }

    function handleClick() {
        if (value === undefined) {
            alert('Please estimate the value of your bike.')
            return;
        }
        if (isNaN(value) || value.includes(' ')) {
            alert('Estimated value must be a numerical value.')
            return;
        }
        if (checked == false) {
            alert('You must agree to the Terms of Service & Privacy Policy to proceed.');
            return;
        }
        if (!isNaN(value) && value != '' && value != ' ' && value != undefined && checked == true) {
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
            .then(res=>{
                console.log(res)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
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
                    <div className="row uk-margin">
                        <div className="col-md-6">
                            <p>Estimated Value:</p>
                        </div>
                        <div className="col-md-4">
                            <div className="uk-inline">
                                <span className="uk-form-icon">$</span>
                                <input className="estimate uk-input" type="text" name="value" value={value} onChange={handleValueChange}></input>
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
        <section className="sign-up">
            <div className="form-content">
                <div className="often">
                    <h4>How often do you ride?</h4>
                    <input type="button" className="light uk-button uk-button-default" value="0-5 Days/Month" onClick={handleOftenChange}></input>
                    <input type="button" className="med uk-button uk-button-default" value="10+ Days/Month" onClick={handleOftenChange}></input>
                    <input type="button" className="heavy uk-button uk-button-default" value="Daily" onClick={handleOftenChange}></input>
                    <br></br>
                    <a className="next2-btn uk-button uk-button-default" href="#" onClick={handlePost}>Next</a>
                </div>
            </div>
        </section>
        </div>
    )
};

export default Form;