import React from 'react'
import LoginForm from './LoginForm'
import PropTypes from "prop-types";
import {Banner, Splash} from '../../common';
import { connect } from "react-redux";
import { login } from "../actions/auth";

class LoginPage extends React.Component {

	submit = data => {
		this.props.login(data);
		console.log("Authenticated!");
      	this.props.history.push("/");
	};

	  render(){
	    return (
	      <Splash>
			<Banner /> 
	        <LoginForm submit={this.submit}/>
	      </Splash>
	    );
	  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(null, { login })(LoginPage);
