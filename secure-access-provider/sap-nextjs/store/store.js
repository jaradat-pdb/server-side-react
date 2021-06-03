import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from '../reducers/reducers';
import { InitialState } from '../actions/actions';

export const initStore = (initialState = InitialState) => {
    createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}