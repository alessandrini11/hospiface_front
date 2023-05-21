export const create = async (body) => {
    const response = await axios.post('/patient', body)
    return response.data;
}