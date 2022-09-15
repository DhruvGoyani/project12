import {combineReducers} from "redux";
import {CounterReducer} from "../Reducer/Counter.Reducer";
import { medicineReducer } from "./Medicine.Reducer";

export const rootReducer = combineReducers ({
  
    Counter : CounterReducer,
    medicine : medicineReducer
})  
