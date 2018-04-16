import { combineReducers } from "redux";

// import here reducers for each app.
import auth from './modules/authentication/reducers/auth';

// export here the reducer for each app. 
const appReducer = combineReducers({
	auth
});

export default appReducer;
