import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import * as reducers from './reducers'

export default function(data) {
    var finalReducer = combineReducers( reducers )
    var finalCreateStore = applyMiddleware( thunk )( createStore )
    var store = createStore( finalCreateStore )

    return store
}
