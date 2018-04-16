import {USER_LOGGED_OUT} from './types';
import appReducer from './appReducer';

const rootReducer = (state, action) => {
	// Clean the store.
    if (action.type === USER_LOGGED_OUT) {
        state = {}
    }
	// an appReducer must be created to handle multiple reducers for each application.    
	return appReducer(state, action)
  }

export default rootReducer;