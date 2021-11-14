//import { activatesearchbar,inactivetesearchbar } from "./actions";
import { ACTIVATE_SERACHBAR, INA_CTIVE_SERACHBAR } from "../actionTypes";
const initialState = {
  isBarActive: false,
  payload:""
};
const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_SERACHBAR:
      return {
        ...state,
        isBarActive: true,
      };
    case INA_CTIVE_SERACHBAR:
      return {
        ...state,
        isBarActive: false,
      };
    default:
      return state;
  }
};
export default searchBarReducer;
