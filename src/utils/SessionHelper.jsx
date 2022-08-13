import { USER_SESSION_KEY } from "./constants"

export default class SessionHelper {
    static setUserInfo = (info) => {
        sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(info))
    }
    static getUserInfo = () => {
        return JSON.parse(sessionStorage.getItem(USER_SESSION_KEY))
    }
    static isUserLogedIn = () => {
        return !!(this.getUserInfo())
    }
}