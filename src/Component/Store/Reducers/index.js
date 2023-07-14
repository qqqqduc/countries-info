import { combineReducers } from "redux";
import CountriesReducer from "./countriesReducer";

const reducer = combineReducers({
    Countries: CountriesReducer,
});

export default reducer;