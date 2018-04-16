import { USER_LOGGED_IN } from "../../../types";

export default function auth (state = {}, action = {}) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return action.auth;
		default:
			return state;
	}
}
