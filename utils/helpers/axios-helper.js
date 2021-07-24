import axios from 'axios'
const url = process.env.NEXT_PUBLIC_BASE_URL
const api_key = process.env.NEXT_PUBLIC_API_KEY

export const responseAPI = async (method, endpoint, body=null) => {
    
    try {
        if(method == 'GET') {
            const response = await axios.get(`${url}/${endpoint}?api_key=${api_key}`)

            return response
        }
    } catch (err) {
        return err
    }
}