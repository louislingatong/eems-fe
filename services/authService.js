import Router from 'next/router';
import Http from '../utils/Http';
import * as authActions from '../redux/actions/authActions';

/**
 * Fetch the current logged in user
 *
 * @returns {function(*)}
 */
export function fetchUser() {
    return dispatch => {
        return Http.get('/user')
            .then((res) => {
                const data = res.data;
                dispatch(authActions.authUser(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

/**
 * Login user
 *
 * @param credentials
 * @returns {function(*)}
 */
export function login(credentials) {
    return dispatch => {
        const config = {
            grant_type: 'password',
            client_id: process.env.clientId,
            client_secret: process.env.clientSecret
        };

        const data = {...credentials, ...config};

        return Http.post('/oauth/token', data)
            .then((res) => {
                const data = res.data;
                dispatch(authActions.authLogin(data.access_token));
                Router.push('/');
            })
            .catch((err) => {
                console.log(err);
            });

    };
}

/**
 * Logout user
 *
 * @returns {function(*)}
 */
export function logout() {
    return dispatch => {
        return Http.delete('/api/oauth/token')
            .then(() => {
                dispatch(authActions.authLogout());
                Router.push('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

