import React, { useState } from 'react';
import API from '../../utils/API';


function BikeInfo() {
    const [uses, setUses] = useState([]);
    const [stolen, setStolen] = useState();
    const [clubs, setClubs] = useState([]);

    function handleUsesChange(event) {
        setUses(event.target.value);
    }

    function handleStolenTrue() {
        setStolen(true);
    }

    function handleStolenFalse() {
        setStolen(false);
    }

    function handleClubsChange(event) {
        setClubs(event.target.value)
    }

    function handleClubsAdd(event) {
        event.preventDefault();
        let list_item = document.getElementsByClassName('clubs')[0].value;
        console.log(document.getElementsByClassName('clubs'))
        let club_list = document.getElementsByClassName('club-list')[0];
        let li = document.createElement('li');
        li.innerText = list_item;
        club_list.appendChild(li);
        document.getElementsByClassName('clubs')[0].value = '';
    }

    function handlePost() {
        API.createUses({
            use: uses,
            stolen: stolen,
            clubs: clubs
        })
            .then(console.log("Uses saved to database."))
            .catch(err => console.log(err));
    }

    return (
        <section className="sign-up">
            <div className="form-content">
                <div className="bike-info">
                    <h4>What do you use your bike for (primarily)?</h4>
                    <div className="uses uk-margin-large">
                    <input type="button" className="light uk-button uk-button-default" value="Commuting" onClick={handleUsesChange}></input>
                    <input type="button" className="light uk-button uk-button-default" value="Pleasure" onClick={handleUsesChange}></input>
                    <input type="button" className="light uk-button uk-button-default" value="Exercise" onClick={handleUsesChange}></input>
                    <input type="button" className="light uk-button uk-button-default" value="Racing" onClick={handleUsesChange}></input>
                    <input type="button" className="light uk-button uk-button-default" value="Other" onClick={handleUsesChange}></input>
                        {/* <label><input className="uk-checkbox" type="checkbox" value="Commuting" onClick={handleUsesChange}></input> Commuting</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Pleasure" onClick={handleUsesChange}></input> Pleasure</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Exercise" onClick={handleUsesChange}></input> Exercise</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Racing" onClick={handleUsesChange}></input> Racing</label>
                        <label><input className="uk-checkbox" type="checkbox" value="All of the Above" onClick={handleUsesChange}></input> All of the above</label>
                        <label><input className="uk-checkbox" type="checkbox" value="Other" onClick={handleUsesChange}></input> Other</label> */}
                    </div>
                    <h4>Have you ever had a bike stolen?</h4>
                    <div className="row justify-content-md-center uk-margin-large">
                        <div className="up col-md-4">
                            <i className="up far fa-thumbs-up" aria-hidden="true" onClick={handleStolenTrue}></i>
                        </div>
                        <div className="down col-md-4">
                            <i className="down far fa-thumbs-down" aria-hidden="true" onClick={handleStolenFalse}></i>
                        </div>
                    </div>
                    <h4>List your bike clubs below</h4>
                    <div className="uk-margin">
                        <div>
                            <ul className="club-list"></ul>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <input className="clubs uk-input" onfocus="this.value=''" type="text" name="clubs" value={clubs} onChange={handleClubsChange}></input>
                            </div>
                            <div className="col-md-2 uk-margin">
                                <button className="club-btn uk-button uk-button-default" onClick={handleClubsAdd}>+</button>
                            </div>
                        </div>
                    </div>
                    <a className="next3-btn uk-button uk-button-default" href="/signup4" onClick={handlePost}>Next</a>
                </div>
            </div>
        </section>
    )
};

export default BikeInfo;