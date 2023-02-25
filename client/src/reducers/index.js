import { CombinedReducers, combineReducers } from "redux";
import {authReducers} from './auth';

const rootReducer = combineReducers({
    user: authReducers
})

export default rootReducer;