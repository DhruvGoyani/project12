import { createStore ,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from '../redux/Reducer/Index';




export const ConfigureStore = () => {
    let Store = createStore(rootReducer , applyMiddleware(thunk))

    return Store;
}   