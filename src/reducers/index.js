import {combineReducers} from "redux";
import LoginReducer from "./Login"


const allReducers = combineReducers({
     LoginReducer,
   
    //them nhieu reducer ở dây
}) 
export default allReducers;
