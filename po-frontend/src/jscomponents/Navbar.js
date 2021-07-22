/*
* Navbar.js: This file contains the main/home page of the web application.
* This will be the default page that visitors will see when they access the
* app
* @authors Gloria, Ernest, Ahlaam, Jacqueline
*/

import React from 'react';
import {  Link } from "react-router-dom";
import '../csscomponents/Navbar.css';
import MainPage from "./MainPage";

//just added
import EventsPage from "./EventsPage.js";
import Sign_upPage from "./Sign_upPage";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="Nav">
                <div className="Nav__container">
                    {/*<Link to="/" className="Nav__brand">
                        <img src={logo} className="Nav__logo" />
                    </Link>*/}

                    <div className="Nav__right">
                        <ul className="Nav__item-wrapper">
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/home">HOME</Link>
                            </li>
                            {/*<MainPage/>just added*/}
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/serve">SERVE</Link>
                            </li>

                              {/*<Sign_upPage/>just added*/}
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/donate">DONATE</Link>
                            </li>
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/events">EVENTS</Link>
                            </li>
                            {/*<EventsPage/>//just added*/}



                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
