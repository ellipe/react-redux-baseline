import React from 'react'
import {Banner, Splash} from '../../common';
import ResetPasswordForm from './ResetPasswordForm'

class ResetPasswordPage extends React.Component {
  render(){
    return(
      <Splash>
      	<Banner /> 
        <ResetPasswordForm />
      </Splash>
    );
  }
}

export default ResetPasswordPage
