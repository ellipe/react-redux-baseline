import React, { Component } from 'react';
import './Banner.css';
import Logo from './logo.svg'


const Banner = () =>  {

		return (
			<div className="container fluid bg-dark-blue margin-bottom">
				<img className="logo" src={Logo} alt="Laboratorio Medico Las Americas"/>
			</div>
		);
}

export  { Banner };
