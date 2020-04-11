import cookie from 'js-cookie';

export const setCookie = (key, value) => {
    cookie.set(key, value);
};

export const removeCookie = (key) => {
    cookie.remove(key);
};

export const getCookie = (key) => {
    return cookie.get(key);
};