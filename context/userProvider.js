import { useReducer } from 'react'
import { UserContext } from './userContext'
const initState = {
    user: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'CLEAR_USER':
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export const UserProvider = ({children}) => {
    const [userState, userDispatch] = useReducer(reducer, initState)
    return (
        <UserContext.Provider value={{ userState, userDispatch }}>
            {children}
        </UserContext.Provider>
    )
}