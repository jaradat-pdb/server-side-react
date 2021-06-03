import { createWrapper } from 'next-redux-wrapper';
import { createStore, Store } from 'redux';
import { InitialState } from '../actions/actions';

const reducer = (state = InitialState, action) => {
    if(action.type == 'ChangeLabel') {
        return Object.assign({}, state, { text: action.text });
    }
    else {
        return state;
    }
}

const makeStore = (ctx) => createStore(reducer);
export const wrapper = createWrapper<Store<{ text: 'string' }>>(makeStore, { debug: true });