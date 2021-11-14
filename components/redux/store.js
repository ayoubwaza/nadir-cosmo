import searchBarReducer from "./reducers/serachBarReducer";
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({
  searchBarReducer,
  cartReducer,
});
const middleware = [thunk];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
