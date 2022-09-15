import * as ActionTypes from "../Action.Type";


export const incrementcounter = () => (dispatch) => {
    dispatch({type :ActionTypes.INCREMENT_COUNTER});
}

export const decrementcounter = () => (dispatch) => {
    dispatch({type :ActionTypes.DECREMENT_COUNTER});
}