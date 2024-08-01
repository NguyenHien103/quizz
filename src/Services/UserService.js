import { get,post} from "../utils/requets";


export const login = async (email, password) => {
    const result = await get(`user?email=${email}&password=${password}`)
    return result;
}


export const register = async (options) => {
    const result = await post(`user`,options)
    return result;
}
//check có tk chưa
export const checkExits = async (key, value) => {
    const result = await get(`user?${key}=${value}`)
    return result;
}
