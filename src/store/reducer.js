import{combineReducers} from "redux";
import {movieBookingReducer} from "./../component/duck/reducer"
const rootReducer = combineReducers({
  //quan ly cac child reducer
  //key : value
  movieBookingReducer
});

export {rootReducer};