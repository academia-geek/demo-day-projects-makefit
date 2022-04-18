import { typesRegister } from "../types/types"

export const registerReducers = (state = {}, action) => {
    switch (action.type) {
        case typesRegister.register:
            return {
                email: action.payload.email,
                pass: action.payload.pass,
                name: action.payload.name,
            }


        default:
            return state
    }
}