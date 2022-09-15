import * as ActionTypes from "../Action.Type";
const initialState = {
    counter : 0
}


export const 






CounterReducer = ( state = initialState , action) => {
        switch (action.type) {
            case ActionTypes.INCREMENT_COUNTER:
                return {
                    ...state,
                    counter : state.counter + 1
                };
            case ActionTypes.DECREMENT_COUNTER:
                return {
                    ...state,
                    counter : state.counter - 1
                };
            default:
                return state;
        }
}