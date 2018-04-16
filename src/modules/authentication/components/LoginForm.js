import React from 'react';
import { Link } from 'react-router-dom';
import  { InputField, SubmitField }  from '../../common';

class LoginForm extends React.Component {

  state = {
    data : {
      username: "",
      password: ""
    }
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting data: ",this.state.data);
    this.props.submit(this.state.data)
  }

  render(){
    const { username, password } = this.state.data
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          required={true}
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Usuario"
        />
        <InputField
          required={true}
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Contraseña"
        />
        <SubmitField value="Ingresar" />
        <Link to="/forgot_password" className="form-link">¿ Olvidaste tu contraseña ?</Link>
      </form>
    );
  }
}

export default LoginForm
