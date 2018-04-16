import React from 'react'
import {Banner, Splash} from '../../common';
import ForgotPasswordForm from './ForgotPasswordForm'

class ForgotPasswordPage extends React.Component {
  render(){
    return (
      <Splash>
      	<Banner /> 
        <ForgotPasswordForm />
      </Splash>

    );
  }
}

export default ForgotPasswordPage
