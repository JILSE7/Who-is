import {legacy_createStore, combineReducers, compose, applyMiddleware} from 'redux';
import WhoReducer from '../reducers/WhoReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;




const reducers = combineReducers({
    whoReducer: WhoReducer
})

export const store = legacy_createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware( thunk )
    )
    
);