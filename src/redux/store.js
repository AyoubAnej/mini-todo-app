import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer/reducer";

const rootReducer = combineReducers({
    todo : todoReducer,
})

const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

export default store;