import React from 'react'
import  { InputField, SubmitField, Message}  from '../../common';
import { Link } from 'react-router-dom'


class ResetPasswordForm extends React.Component {

  state = {
    data : {
      password: "",
      password_confirmation:""
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
    const { password, password_confirmation } = this.state.data
    return (
      <form onSubmit={this.handleSubmit}>
        <Message
          header = "Modificar contraseña"
          message = "Confirma tu nueva contraseña para ser modificada"
        />
        <InputField
          required={true}
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Contraseña"
        />
        <InputField
          required={true}
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.onChange}
          placeholder="Confirmar Contraseña"
        />
        <SubmitField value="Cambiar Contraseña" />
        <Link to="/login" className="form-link">Cancelar</Link>
      </form>
    );
  }
}

export default ResetPasswordForm
