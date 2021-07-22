import React from 'react';
import '../App.css';
import {  Link } from "react-router-dom";
import '../csscomponents/LoginPage.css';
import MainPage from "./MainPage";
import PraiseOutreach from "../PraiseOutreach.png";

//import "PraiseOutreach.png";// from "src";


//export default class EventsPage extends React.Component {
function LoginPage() {
  //render() {
  return (
    <div className = "login-page">
      {/* <p>
      //   This is the Login page.
      //   <br />
      //   Click on the button below to go back to the main page
      // </p>*/}


        {/*}<div class="logo">
        <img src={PraiseOutreach} className="logo" alt="PraiseOutreach" />
          </div>*/}

          <div class="imgcontainer">
            <img src={PraiseOutreach} class="avatar" alt="PraiseOutreach" ></img>
          </div>

      <form action="action_page.php" method="post">

    <div class="container">
      {/*<label for="uname"><b>Username</b></label>*/}
      <input type="text" placeholder="ENTER USERNAME" name="uname" required>

      </input>

      {/*<label for="psw"><b>Password</b></label>*/}
      <input type="password" placeholder="ENTER PASSWORD" name="psw" required>
      </input>

      <p>FORGOT PASSWORD?</p>
      <button type="submit">LOG IN</button>

        {/*<input type="checkbox" checked="checked" name="remember"> Remember me
        </input>
      </label>}
      */}
    </div>

    {/*// <div class="container" style="background-color:#f1f1f1">
    //   <button type="button" class="cancelbtn">Cancel</button>
    //   <span class="psw">Forgot <a href="#">password?</a></span>
    // </div>*/}
  </form>
    </div>

  );
}

export default LoginPage;
