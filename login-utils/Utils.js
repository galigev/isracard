import { loginFB } from "./FacebookUtils";

export const FACEBOOK = 'facebook', GOOGLE = 'google';

const loginMap = {
    [FACEBOOK]: _.noop,
    [GOOGLE]: _.noop
};

export function login(type) {
    loginMap[type] || _.noop;

    switch(type) {
        case FACEBOOK:
            {
                loginFB();
                break;
            }
        case GOOGLE:
            {
                break;
            }
    }

    return true;
}