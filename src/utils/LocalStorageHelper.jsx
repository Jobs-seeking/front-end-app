import { USER_ID_STORAGE_KEY } from "./constants"

export default class LocalStorageHelper {
    static getUserId = () => {
        const userId = localStorage.getItem(USER_ID_STORAGE_KEY)
        return userId ? userId : null
    }
    static setUserId = (id) => {
        localStorage.setItem(USER_ID_STORAGE_KEY, id)
    }
    static addWishList = (job) => {
        localStorage.setItem("wishList", job)
    }
}
