import React from 'react'
import  { InputField, SubmitField, Message }  from '../../common';
import { Link } from 'react-router-dom'

class ForgotPasswordForm extends React.Component {

  state = {
    data : {
      username: ""
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
  }

  render(){
    const { username } = this.state.data
    return (
      <form onSubmit={this.handleSubmit}>
        <Message
          header = "¿ Olvidaste tu contraseña ?"
          message = "Ingresa tu usuario o correo electrónico para solicitar el cambio de contraseña"
        />
        <InputField
          required={true}
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Usuario"
        />
        <SubmitField value="Solicitar Cambio" />
        <Link to="/login" className="form-link">Cancelar</Link>
      </form>
    );
  }
}

export default ForgotPasswordForm
