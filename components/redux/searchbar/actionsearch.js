import { ACTIVATE_SERACHBAR,INA_CTIVE_SERACHBAR } from "../actionTypes";

export const activatesearchbar = () => {
  return {
    type: ACTIVATE_SERACHBAR,
  };
};
export const inactivetesearchbar = () => {
    return {
      type: INA_CTIVE_SERACHBAR,
    };
  };
