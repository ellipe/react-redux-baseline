import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import axios from 'axios'; 
// import api from "../api";

export const userLoggedIn = auth => ({
	type: USER_LOGGED_IN,
	auth 
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});

export const setToken = token => {
	localStorage.user_token = token;
};

export const deleteToken = () => {
	localStorage.removeItem("user_token");
};

export const getToken = () => {
	return localStorage.user_token;
};

export const logout = () => dispatch => {
	deleteToken();
	axios.defaults.headers.common['Authorization'] = '';
	dispatch(userLoggedOut());
};


export const login = credentials => dispatch => {

	// Fake user login call.
	let auth = {};
	auth.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImVmODE4MmM0LWNmZTMtNDU1OC05NTVlLTQ4MzkwNzg3ODg5NCIsImlhdCI6MTUyMDIxMjQ4NSwiZXhwIjoxNTIwMjE2MDg1fQ.mxZqP1GUczCv5WNTgpl-PaTMpS5O_y-yiJ0hw3aT4h8";
	setToken(auth.token);
	axios.defaults.headers.common['Authorization'] = auth.token;
	dispatch(userLoggedIn(auth));
	console.log("user dispatched: ", auth);
	return auth;
}
