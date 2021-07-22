import React from 'react';
//import '../App.css';
import {  Link } from "react-router-dom";
import '../csscomponents/Sign_upPage.css';
import MainPage from "./MainPage";



//export default class EventsPage extends React.Component {
function Sign_upPage() {
  //render() {
  return (
    /*<div>
      <p>
        This is the sign_up page.
        <br />
        Click on the button below to go back to the main page
      </p>
    </div>*/
    <div className = "signup-page">
    <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"></img>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    </input>

    {/*<label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
      </input>
    </label>
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
//}

export default Sign_upPage;
