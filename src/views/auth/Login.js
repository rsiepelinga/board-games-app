/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LoginWrapper, LogoLoading } from '../../components';

class Login extends React.Component {
  render() {
    return (
      <div>
        <LogoLoading />
        <LoginWrapper />
      </div>
    );
  }
}

export default Login;