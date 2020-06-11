import React from 'react';

function Often() {
    return (
        <div class="often">
            <h4>How often do you ride?</h4>
            <input type="button" class="light uk-button uk-button-default" value="0-5 Days/Month"></input>
            <input type="button" class="med uk-button uk-button-default" value="10+ Days/Month"></input>
            <input type="button" class="heavy uk-button uk-button-default" value="Daily"></input>
            <br></br>
            <a class="next2-btn uk-button uk-button-default" href="signup3.html">Next</a>
        </div>
    )
};

export default Often;