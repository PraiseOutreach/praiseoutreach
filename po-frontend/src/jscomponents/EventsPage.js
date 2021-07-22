import React from 'react';
//import '../App.css';
import {  Link } from "react-router-dom";
import '../csscomponents/EventsPage.css';
//import MainPage from "./MainPage";
//import EventPage from "./EventsPage";

//export default class EventsPage extends React.Component {
function EventsPage() {
  //render() {
  return (
    <div className = "event-page">
      <p>
        This is the events page.
        <br />
        Click on the button below to go back to the main page
      </p>
    </div>
  );
  }
//}

export default EventsPage;
