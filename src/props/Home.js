import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className="main-home">
            <h1>Stay informed during the pandemic</h1>
            <h3>Visit other webpages to learn more!</h3>
            
            <ul className="links">
                <li><Link to="/DMVCovidApp/about-covid19">About Covid 19</Link></li>
                <li><Link to="/DMVCovidApp/locations">Testing Locations</Link></li>
                <li><Link to="/DMVCovidApp/local-data">Local DMV Data</Link></li>
                <li><Link to="/DMVCovidApp/world">World Info</Link></li>
                <li><Link to="/DMVCovidApp/accine">Vaccines News</Link></li>
            </ul>

            <img src={require("./gifs/keep-calm.gif")} alt="keep calm"/>
            <img src={require("./gifs/keep-distance.gif")} alt="keep distance"/>
            <img src={require("./gifs/stay-home.gif")} alt="stay home"/>
            <img src={require("./gifs/wash-hands.gif")} alt="wash hands"/>
            <img src={require("./gifs/quarantine.gif")} alt="quarantine"/>
            <img src={require("./gifs/wear-mask.gif")} alt="wear mask"/>
        </div>
    )
}

export default Home
