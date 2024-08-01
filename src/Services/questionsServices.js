import { get} from "../utils/requets";

export const getlistQuetions = async (topicId) => {
    const result = await get(`questions?topicId=${topicId}`)
    return result;
}