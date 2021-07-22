/*
* MainPage.js: This file contains the main/home page of the web application.
* This will be the default page that visitors will see when they access the
* app
* @authors Gloria, Ernest, Ahlaam, Jacqueline
*/

import React from 'react';
import '../csscomponents/MainPage.css';
import '../App.css';
import logo from "../Group1.png";
import quote1 from "../quote1.png";
import logo3 from "../AfterReach.png";
import impactquote from "../impactquote.png";
import DonatePageL from "../DonatePageL.png";
import DonatePageR from "../DonatePageR.png";
import LastPhoto from "../LastPhoto.jpg";
import SignupPageL from "../SignupPageL.png";
import SignupPageR from "../SignupPageR.png";

//Ernest's code
import{ Switch,Route,Link} from "react-router-dom";


function MainPage() {
  return (
  /* First picture on the main page*/
  <div className="App">
      {/*<div className="App-logo">*/}
    <div className="background">
        {/*}<img src={logo} className="App-logo" alt="logo" />*/}
      </div>

      {/*First part of the main page*/}


  <div className = 'ref'>
    <p>REACH 2021</p>
  </div>

  <li className="Nav__item">
      <Link className="Nav__link" to="/events"><div className = 'eve'>
        <h1>FIND AN EVENT ></h1>
      </div></Link>
  </li>



  <div className = 'buttons-container'>
    <div className = 'quotepic'>
      {/*}<img src={quote1} className="App-logo" alt="quote1" />*/}
    </div>

    <div className = 'buttonpic'>
      {/*<img src={logo3} className="App-logo" alt="logo3" />*/}
    </div>

    <div className = 'quotefont'>
      <h1>Connect with people from around the world by serving at one of Praise Outreach event. Praise Outreach is a ministry of Praise Nation meeting the needs of people and communities. Join the Movement. Be present. Serve and Lead. Give and Impact. Love and Fight. Spread Hope. Spread Jesus</h1>
    </div>

  {/*<div className = 'quotefont4'>
    <h1>Spread Hope</h1>
  </div>*/}

    <div className = 'impact'>
      <div className = 'impactquotepic'>
        {/*}<img src={impactquote} className="App-logo" alt="impactquote" />*/}
      </div>


      {/* Code for the 3 buttons. Clicking on these buttons leads you to the corresponding pages
      */}

      {/*<li className="Nav__item">*/}
        {/*Consider the partner page!!!!!*/}
          <Link className="Nav__link" to="/partner"><button class="partner">PARTNER</button></Link>



      {/*<button class="donate">DONATE*/}

      <li className="Nav__item">
          <Link className="Nav__link" to="/donate"><button class="donate">GIVE</button></Link>
      </li>

      {/*</button>*/}

      {/*//<button id="signup">SIGNUP*/}

      <li className="Nav__item">
          <Link className="Nav__link" to="/serve"><button id="signup">SERVE</button></Link>
      </li>

      {/*</button>*/}


      {/* Donate portion of the main page */}
      <div className = 'donatepageL'>
        {/*<img src={DonatePageL} className="App-logo" alt="DonatePageL" />*/}
      </div>

      <div className = 'donatepageR'>
        {/*<img src={DonatePageR} className="App-logo" alt="DonatePageR" />*/}
      </div>

      <div className = 'donatefont'>
        <h1>Do more by giving and knowing that your generous contributions are changing lives in the communities that we serve.</h1>
      </div>

<div className = "givebutton" ></div>
    </div>

    {/* Last portion of the main page */}
    <div className = 'lastpic'>
      {/*<img src={LastPhoto} className="App-logo" alt="LastPhoto" />*/}
    </div>

    <div className = 'signuppagecontainer'>
    </div>

    <div className = 'signuppageL'>
      {/*<img src={SignupPageL} className="App-logo" alt="SignupPageL" />*/}
    </div>

    <div className = 'signuppageR'>
      {/*<img src={SignupPageR} className="App-logo" alt="SignupPageR" />*/}
    </div>

    <div className = 'immersefont'>
      <p>Immerse yourself in the culture of the people. Join the family.</p>
    </div>

    <div className = "lastpic1"></div>
    <div className = "lastpic2"></div>
    <div className = "lastpic3"></div>
    <div className = "lastquote"></div>
    {/*}//</div>*/}
  </div>
</div>

  );
}

export default MainPage;
