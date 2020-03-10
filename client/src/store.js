import {createStore, applyMiddleware, compose} from 'redux'
import {reducerList} from './reducers/reducer'
import thunk from 'redux-thunk'


export const store=createStore(reducerList, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))