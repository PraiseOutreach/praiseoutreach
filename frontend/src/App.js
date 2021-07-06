import React from 'react';
// import {Switch, Route,Router} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from "./jscomponents/Nav";
import MainPage from "./jscomponents/MainPage";
import EventsPage from "./jscomponents/EventsPage";
import logo from './Group1.png';
import logo2 from './volunteer.jpg';
import logo3 from './AfterReach.png';
import quote1 from './quote1.png';
import impactquote from './impactquote.png';
import DonatePageL from './DonatePageL.png';
import DonatePageR from './DonatePageR.png';
import LastPhoto from './LastPhoto.jpg';
import SignupPageL from './SignupPageL.png';
import SignupPageR from './SignupPageR.png';


function App() {
  return (


      <div className="App">
          <Router>
              <div>
                  <Nav />
                  <Switch>

                      <Route exactly component={MainPage} pattern="/home" />
                      <Route exactly component={EventsPage} pattern="/events" />
                      {/* <Route exactly component={Page2} pattern="/path2" />
                            <Route exactly component={Page3} pattern="/path3" />
                            <Route component={Page404} />*/}
                  </Switch>
              </div>
          </Router>
      </div>);
   /*<div className="App">

      <header className="App-header">
      <div className = 'navbar-container'>
       NavBar
      </div>
       <div className= 'cont1'>
    <p> Home</p>
    </div>
    <div className= 'cont2'>
   <p> Serve</p>
    </div>
    <div className= 'cont3'>
    <p> Donate</p>
 >
    </div>
    <div className= 'cont4'>
    <p> Events</p>
    </div> */


    /*<div className="App-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
         <div className = 'ref'>
        <p>REACH 2021</p>
        </div>
        <div className = 'eve'>
        <h1>FIND AN EVENT ></h1>
        </div>
          <div className = 'buttons-container'>
           <div className = 'quotepic'>
      <img src={quote1} className="App-logo" alt="quote1" />
       </div>

          <div className = 'buttonpic'>
          <img src={logo3} className="App-logo" alt="logo3" />
      </div>

        <div className = 'quotefont'>
        <h1>Connect with people from around the world by serving at one of Praise Outreach event. Praise Outreach is a ministry of Praise Nation meeting the needs of people and communities. Join the Movement. Be present. Serve and Lead. Give and Impact. Love and Fight.</h1>
        </div>

        <div className = 'quotefont4'>
        <h1>Spread Hope</h1>
        </div>

        <div className = 'impact'>
         <div className = 'impactquotepic'>
        <img src={impactquote} className="App-logo" alt="impactquote" />
        </div>



         <div className = 'donatebuttonshape'>
        </div>

        <div className = 'donate'>
        <h1>DONATE</h1>
        </div>

         <div className = 'signupbuttonshape'>
        </div>

        <div className = 'signup'>
        <h1>SIGNUP</h1>
        </div>


         <div className = 'eventbuttonshape'>
        </div>

        <div className = 'event'>
        <h1>EVENT</h1>
        </div>

         <div className = 'donatepageL'>
          <img src={DonatePageL} className="App-logo" alt="DonatePageL" />
      </div>

      <div className = 'donatepageR'>
          <img src={DonatePageR} className="App-logo" alt="DonatePageR" />
      </div>

      <div className = 'donatefont'>
        <h1>Do more by giving and knowing that your generous contributions are changing lives in the communities that we serve.</h1>
        </div>

        </div>


        <div className = 'lastpic'>
          <img src={LastPhoto} className="App-logo" alt="LastPhoto" />
      </div>

      <div className = 'signuppagecontainer'>
        </div>

       <div className = 'signuppageL'>
          <img src={SignupPageL} className="App-logo" alt="SignupPageL" />
      </div>

       <div className = 'signuppageR'>
          <img src={SignupPageR} className="App-logo" alt="SignupPageR" />
      </div>

      <div className = 'immersefont'>
        <p>Immerse yourself in the culture of the people. Join the family.</p>
        </div>

          </div>
      </div>

      /*    {/!*</header>
        </div>*!/}*/

  //);
}

export default App;
