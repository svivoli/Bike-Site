import React, { useState } from 'react';
import API from '../../utils/API';

function You() {
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [email, setEmail] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [year, setYear] = useState();
    const [zip, setZip] = useState();

    function handlePost() {
        API.createClient({
            first: first,
            last: last,
            email: email,
            dob_month: month,
            dob_day: day,
            dob_year: year,
            zip: zip
        })
            .then(console.log("Client saved to database."))
            .catch(err => console.log(err));
    }

    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="you">
                    <h3>You</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="uk-input" type="text" placeholder="First"></input>
                        </div>
                        <div className="col-md-6">
                            <input className="uk-input" type="text" placeholder="Last"></input>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail"></span>
                            <input className="uk-input" type="text" placeholder="email@domain.com"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" style={{ marginTop: '20px' }}>
                            <p>Date of Birth:</p>
                        </div>
                        <div className="col-md-2">
                            <input className="uk-input" type="text" placeholder="Month"></input>
                        </div>
                        <div className="col-md-2">
                            <input className="uk-input" type="text" placeholder="Day"></input>
                        </div>
                        <div className="col-md-2">
                            <input className="uk-input" type="text" placeholder="Year"></input>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-3" style={{ marginTop: '20px' }}>
                            <p>Zip:</p>
                        </div>
                        <div className="col-md-3">
                            <input className="uk-input" type="text"></input>
                        </div>
                    </div>
                    <div className="uk-margin-large">
                        <button type="submit" className="submit-btn uk-button uk-button-default" onClickk={handlePost()}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default You;