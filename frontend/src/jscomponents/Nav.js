import React from 'react';
import {  Link } from "react-router-dom";
import '../csscomponents/Nav.css';
import MainPage from "./MainPage";

export default class Nav extends React.Component {
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
                                <Link className="Nav__link" to="/home">Home</Link>
                            </li>
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/serve">Serve</Link>
                            </li>
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/donate">Donate</Link>
                            </li>
                            <li className="Nav__item">
                                <Link className="Nav__link" to="/events">Events</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
