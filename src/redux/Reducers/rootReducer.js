import {combineReducers} from "redux"
import { taskReducer } from "./TaskReducer"
import filterReducer from "./FilterReducer"

const rootReducer = combineReducers({taskReducer, filterReducer})

export default rootReducer