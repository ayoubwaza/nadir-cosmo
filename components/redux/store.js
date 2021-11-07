import searchBarReducer from "./searchbar/reducers";
import { createStore } from "redux";

const store = createStore(searchBarReducer);
export default store;
