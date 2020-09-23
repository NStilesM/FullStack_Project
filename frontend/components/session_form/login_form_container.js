import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import { login} from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'Log in',
    };
};

const mDTP = dispatch => {
    return { 
        formFunction: user => dispatch(login(user)),
    };
};

export default connect(mSTP,mDTP)(SessionForm);