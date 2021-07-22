import React from 'react';
import ReactDOM from "react-dom";
// import {Switch, Route,Router} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from "./jscomponents/Navbar";
import MainPage from "./jscomponents/MainPage";
import EventsPage from "./jscomponents/EventsPage";
import Sign_upPage from "./jscomponents/Sign_upPage";
import LoginPage from "./jscomponents/LoginPage";
import DonatePage from "./jscomponents/DonatePage";


//just added
// import styled from "styled-components";
// import style from "styled-components";
//
// const Div = styled.div;
// background-color: #FFFFFF;

function App() {
  return (

    <>
      <div className="App">
          <Router>
              <div>
                  <Nav />
                  <Switch>

                      <Route exact path="/" component={MainPage}/>

                      <Route exact path="/home" component={MainPage}/>
                      {/*<EventsPage />*/}
                      <Route exact path="/events" component={EventsPage}/>
                      <Route exact path="/serve" component={Sign_upPage}/>
                      <Route exact path="/login" component={LoginPage}/>
                      <Route exact path="/donate" component={DonatePage}/>
                      {/* <Route exactly component={Page2} pattern="/path2" />
                            <Route exactly component={Page3} pattern="/path3" />
                            <Route component={Page404} />*/}
                  </Switch>
              </div>
          </Router>
      </div>
      </>
    );

}

export default App;
