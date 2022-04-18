import { typesLogin } from "../types/types"

export const loginReducers = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                id: action.payload.email,
                name: action.payload.password
            }
        case typesLogin.logout:
            return {

            }
        default:
            return state
    }
}