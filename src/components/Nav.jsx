import React from 'react'

const Nav = () => {
  return (
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav
        className="uk-navbar-container uk-navbar-transparent"
        data-uk-navbar="dropbar: true;"
        style={({ position: "relative" }, { zIndex: 980 })}
      >
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#">
            Logo
          </a>
        </div>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <button className="uk-button uk-button-default">Sign In</button>
          </div>
          <div className="uk-navbar-item">
            <button className="uk-button uk-button-default">Sign Up</button>
          </div>
          <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon />
        </div>
      </nav>
    </div>
  );
}

export default Nav