import React from 'react';


function Often() {
    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="often">
                    <h4>How often do you ride?</h4>
                    <input type="button" className="light uk-button uk-button-default" value="0-5 Days/Month"></input>
                    <input type="button" className="med uk-button uk-button-default" value="10+ Days/Month"></input>
                    <input type="button" className="heavy uk-button uk-button-default" value="Daily"></input>
                    <br></br>
                    <a className="next2-btn uk-button uk-button-default" href="/signup3">Next</a>
                </div>
            </div>
        </section>
    )
};

export default Often;