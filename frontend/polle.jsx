
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout, login, signup } from './actions/session_actions';
// import { logout, login, signup } from './util/api_util_session';
// util checked and passed

// debugger;

document.addEventListener('DOMContentLoaded', () => {

    // console.log('Hi')
    const store = configureStore();
    const root = document.getElementById('root');


    // test
    // window.store = store;
    // store.login = user => store.dispatch(login(user));
    // store.signup = user => store.dispatch(signup(user));

    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // test end
    ReactDOM.render(<Root store={store} />, root);
});