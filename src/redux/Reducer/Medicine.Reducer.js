import * as ActionTypes from "../Action.Type";

const initalstate = {
  isloading: false,
  MedicineData: [],
  error: "",
};

export const medicineReducer = (state = initalstate, action) => {
  console.log(action.type, action.payload, state);
  switch (action.type) {
    case ActionTypes.LOADING_MEDICINE:
      return {
        ...state,
        isloading: true,
        MedicineData : [] , 
        error: "",
      };
    case ActionTypes.GET_MEDICINES:
      return {
        ...state,
        isloading: false,
        MedicineData: action.payload,
        error: "",
      };
    case ActionTypes.ERROR_MEDICINE:
      return {
        ...state,
        isloading: false,
        MedicineData: [],
        error: action.payload,
      };
    case ActionTypes.ADD_MEDICINE:
      return {
        ...state,
        isloading: false,
        MedicineData: state.MedicineData.concat(action.payload),
        error: action.payload,
      };
    case ActionTypes.DELETE_MEDICINE:
      return {
        ...state,
        isloading: false,
        MedicineData: state.MedicineData.filter((l) => l.id !== action.payload),
        error: "error",  
      };
    default:
      return state;
  }
};
