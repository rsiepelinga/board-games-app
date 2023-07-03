import React from 'react';
import '../../../themes/styles.css';
import '../../../themes/input.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);

    this.state = {};
  }

  handleSignIn() {
    document.querySelectorAll('input').forEach((input) => {
      if (input.value) {
        localStorage.setItem(input.name, input.value);
      }
    });
    if (localStorage.getItem('bggUsername')) {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div className="full-screen">
        <h1>Hi, welcome.</h1>
        <h3>Enter your BGG username to access cool board game stuff.</h3>

        <form className="display-stack">
          <div className="input__wrapper">
            <input className="input__field" type="text" name="firstName" id="firstName" placeholder="First Name" />
            <label htmlFor="firstname" className="input__label">First Name</label>
          </div>
          <div className="input__wrapper">
            <input className="input__field" type="text" name="bggUsername" id="bggUsername" placeholder="Username" />
            <label htmlFor="bggUsername" className="input__label">BGG Username</label>
          </div>
        </form>

        <div className="anchor">
          <button type="button" className="input--orange" onClick={this.handleSignIn}>Sign In</button>

          <small>
            Don&apos;t have an account?&nbsp;
            <a href="https://boardgamegeek.com/join">Sign Up on BGG</a>
          </small>
        </div>
      </div>
    );
  }
}

export default Form;