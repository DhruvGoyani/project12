import {
  deleteallmedicinedata,
  getallMedicinedata,
  postallMedicinedata,
} from "../../Common/Apis/Medicine.api";
import { BASE_URL } from "../../Shared/BaseUrl";
import * as ActionTypes from "../Action.Type";

export const MedicineData = () => (dispatch) => {
  try {
    dispatch(loading_medicines());
    setTimeout(function () {
      getallMedicinedata()
        // .then((response) => response.json())
        .then((medicines) =>
          dispatch({ type: ActionTypes.GET_MEDICINES, payload: medicines.data })
        )
        .catch((error) => dispatch(error_medicines(error.message)));

      // return fetch(BASE_URL + "medicineData")
      //   .then(
      //     (response) => {
      //       if (response.ok) {
      //         return response;
      //       } else {
      //         var error = new Error(
      //           "Error " + response.status + ": " + response.statusText
      //         );
      //         error.response = response;
      //         throw error;
      //       }
      //     },
      //     (error) => {
      //       var errmess = new Error(error.message);
      //       throw errmess;
      //     }
      //   )

      //   .then((response) => response.json())
      //   .then((medicines) =>
      //     dispatch({ type: ActionTypes.GET_MEDICINES, payload: medicines })
      //   )
      //   .catch((error) => dispatch(error_medicines(error.message)));
    }, 2000);
  } catch (error) {
    dispatch(error_medicines(error.message));
    console.log(error);
  }
};

export const add_Medicine = (value) => (dispatch) => {
  try {
    dispatch(loading_medicines())

    setTimeout(function () {

      postallMedicinedata(value)
        .then(dispatch(({ type: ActionTypes.ADD_MEDICINE, payload: value.value })))
        .catch(error => dispatch(error_medicines(error.message)));


      // fetch(BASE_URL + 'medicine/' + id, {
      //   method: 'DELETE', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(dispatch(({ type: Actiontype.DELETE_MEDICINE, payload: id })))
      //   .catch(error => dispatch(ErrorMedicine(error.message)));
    }, 2000)
  } catch (error) {
    dispatch(error_medicines(error.message))
  }
};

export const delete_medicines = (id) => (dispatch) => {
 console.log(id)
   try {
    deleteallmedicinedata(id)
      .then(dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: id})
      )
      .catch((error) => dispatch(error_medicines(error.message)));
    // return fetch(BASE_URL + "medicineData" + id , {
    //   method: "DELETE",
    // })
    // .then(
    //   (response) => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       var error = new Error(
    //         "Error " + response.status + ": " + response.statusText
    //       );
    //       error.response = response;
    //       throw error;
    //     }
    //   },
    //   (error) => {
    //     var errmess = new Error(error.message);
    //     throw errmess;
    //   }
    // )
    // .then((response) => response.json())
    //   .then((medicines) => dispatch({ type: ActionTypes.DELETE_MEDICINE  , payload: medicines.id})
    //   )
    //   .catch((error) => dispatch(error_medicines(error.message)));
  } catch (error) {
    dispatch(error_medicines(error.message));
  }
};

export const loading_medicines = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE });
};

export const error_medicines = (errors) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: errors });
};
