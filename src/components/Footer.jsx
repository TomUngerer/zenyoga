import React from "react";

const Footer = props => {
  return (
    <footer className="uk-section uk-section-secondary uk-padding-remove-bottom" id="site-footer">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large" data-uk-grid>
          <div className="uk-width-1-2@m">
            <h5>OUR COMPANY</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla
              contact to:{" "}
              <a href="#" title="">
                info@company.com
              </a>
            </p>
            <div>
              <a href="" className="uk-icon-button" data-uk-icon="twitter"></a>
              <a href="" className="uk-icon-button" data-uk-icon="facebook"></a>
              <a href="" className="uk-icon-button" data-uk-icon="instagram"></a>
            </div>
          </div>
          <div className="uk-width-1-6@m">
            <h5>PRODUCTS</h5>
            <ul className="uk-list">
              <li>Big Data</li>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>AI Lab</li>
            </ul>
          </div>
          <div className="uk-width-1-6@m">
            <h5>OUR COMPANY</h5>
            <ul className="uk-list">
              <li>Team</li>
              <li>Work</li>
              <li>Culture</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="uk-width-1-6@m">
            <h5>OUR OFFICES</h5>
            <ul className="uk-list">
              <li>London</li>
              <li>Chicago</li>
              <li>Dubai</li>
              <li>Brussels</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
        <span className="uk-text-small uk-text-muted">
          © 2020 -{" "}
          <a href="https://tomungerer.com/">Created by Tom Ungerer</a>{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
