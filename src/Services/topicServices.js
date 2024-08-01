import { get} from "../utils/requets";

export const getlistTopic = async () => {
    const result = await get(`topics`)
    return result;
}
export const getTopic = async (id) => {
    const result = await get(`topics/${id}`)
    return result;
}