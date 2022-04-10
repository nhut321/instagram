import { createContext, useReducer } from 'react'
import { authInit } from '../store/authInit'
import { authReducer } from '../reducers/authReducer'

export const AuthContext = createContext()

function AuthContextProvider({ children }) {
	const [state, dispatch] = useReducer(authReducer, authInit)

	const data = {
		state,
		dispatch
	}
	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthContextProvider