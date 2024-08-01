import { post} from "../utils/requets";

export const createAnswer = async (options) => {
    const result = await post(`answers`,options)
    return result;
}