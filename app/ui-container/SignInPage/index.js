/* eslint-disable*/
import React, { Component } from 'react';
import logo from 'images/logo-tagline.png';

class SignInPage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     isTop: true,
    // };
    // this.onScroll = this.onScroll.bind(this);
  }

  render() {
    return (
      <div className="Sign-in-wrapper">
        <div className="header-left">
          <img src={logo} alt="" />
        </div>
        <div className="Welcome-wrapper">
          <div className="Welcome-content">
            <h2 className="Content-Heading">Welcome to Maplytiks</h2>
            <p className="Content-paragraph">
              We have created a customized and secure dashboard that will give
              you a comprehensive and accurat visualization of your inventory’s
              brand exposure accross matches, sponsors, assets, and venues.
              <br /> We hope you enjoy your experience!
            </p>
          </div>
          <div className="Form-SignIn">
            <h2 className="form-heading"> Sign In </h2>
            <form>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Enter Username"
              />
              <input
                type="password"
                className="form-control onError"
                placeholder="Enter Password"
              />
              
              <span id="alertMessage"> password does not match </span>
              <div className="form_label">
                <div className="checkbox_label">
                  <input type="checkbox" value="None" name="check" id="test1" />
                  <label htmlFor="test1">
                    <span id="Remember_me"> Remember me </span>
                  </label>
                </div>
                <span className="option_section">Forgot Password?</span>
              </div>
              <button className="btn btn__primary"> Log In </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignInPage;
