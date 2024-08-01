import { getCookie } from "../Helper/cookie";
import { get} from "../utils/requets";

export const getAnswersByuserId = async () => {
    const userId= getCookie('id')
    const result = await get(`answers?userId=${userId}`)
    return result;
}
export const getAnswers = async (id) => {
   
    const result = await get(`answers/${id}`)
    return result;
}