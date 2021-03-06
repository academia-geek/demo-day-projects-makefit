import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { blogReducers } from "../reducers/blogReducers";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";
import thunk from "redux-thunk";
import { favoriteReducers } from "../reducers/favoriteReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    posts: blogReducers,
    favorites : favoriteReducers
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)