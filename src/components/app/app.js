import React from "react";
import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header id="header">
          <div class="logo-image">
            <h4>Litvin BLOG</h4>
          </div>
          <div class="nav-items">
            <ul id="navigation-panel">
              <li>
                <a href="login.html">Log In</a>
              </li>
              <li>
                <a>Sign In</a>
              </li>
            </ul>
          </div>
        </header>
        <div class="main">
          <h2 class="title">Books I read</h2>
          <ul class="books">
            <li>
            <h1>Hi</h1>
            </li>
          </ul>
        </div>
        <footer>
          <p>All rights reserved.</p>
          <p>Developer: Litvin Oleksandr</p>
        </footer>
      </div>
    );
  }
}
