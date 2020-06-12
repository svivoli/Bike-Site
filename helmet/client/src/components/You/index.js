import React from 'react';

function You() {
    return (
        <section class="sign-up">
            <div class="form-content">
                <div class="you">
                    <h3>You</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <input class="uk-input" type="text" placeholder="First"></input>
                        </div>
                        <div class="col-md-6">
                            <input class="uk-input" type="text" placeholder="Last"></input>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail"></span>
                            <input class="uk-input" type="text" placeholder="email@domain.com"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" style={{marginTop: '20px'}}>
                            <p>Date of Birth:</p>
                        </div>
                        <div class="col-md-2">
                            <input class="uk-input" type="text" placeholder="Month"></input>
                        </div>
                        <div class="col-md-2">
                            <input class="uk-input" type="text" placeholder="Day"></input>
                        </div>
                        <div class="col-md-2">
                            <input class="uk-input" type="text" placeholder="Year"></input>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col-md-3" style={{marginTop: '20px'}}>
                            <p>Zip:</p>
                        </div>
                        <div class="col-md-3">
                            <input class="uk-input" type="text"></input>
                        </div>
                    </div>
                    <div class="uk-margin-large">
                        <button type="submit" class="submit-btn uk-button uk-button-default">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default You;