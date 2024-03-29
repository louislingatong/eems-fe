import HTTP from '../../utils/Http';
import {
    AUTH_CHECK,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REFRESH_TOKEN,
    AUTH_RESET_PASSWORD,
} from '../action-types/authActionTypes';

import { setCookie, removeCookie, getCookie } from '../../utils/Cookie';

const initialState = {
    isAuthenticated: null,
};

const authReducer = (state = initialState, {type, payload = null}) => {
    switch (type) {
    case AUTH_REFRESH_TOKEN:
    case AUTH_LOGIN:
        return login(state, payload);
    case AUTH_CHECK:
        return checkAuth(state);
    case AUTH_LOGOUT:
        return logout(state);
    case AUTH_RESET_PASSWORD:
        return resetPassword(state, payload);
    default:
        return state;
    }
};

function login(state, payload) {
    setCookie('token', payload);
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;

    return {
        ...state,
        isAuthenticated: true,
    };
}

function checkAuth(state) {
    const isAuthenticated = !!getCookie('token');

    if (isAuthenticated) {
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${getCookie('token')}`;
    }

    return {
        ...state,
        isAuthenticated: isAuthenticated
    };
}

function logout(state) {
    removeCookie('token');

    return {
        ...state,
        isAuthenticated: false,
    };
}

function resetPassword(state) {
    return {
        ...state,
        resetPassword: true,
    };
}

export const getAuth = state => state.auth.isAuthenticated;

export default authReducer;