function authReducer(state, action) {
	switch (action.type) {
		case 'LOGIN':
			return {...state, isLogin: true}
	}
}

export { authReducer } 