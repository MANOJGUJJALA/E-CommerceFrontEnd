import {applyMiddleware, combineReducers, legacy_createStore} from "redux"


import authReducer from "./Auth/reducer"
import cartReducer from "./Customer/Cart/reducer"
import thunk from "redux-thunk";



const rootReducers=combineReducers({

    auth:authReducer,
    cart:cartReducer,
    // admin
   


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))