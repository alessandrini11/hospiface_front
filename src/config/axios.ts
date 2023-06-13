import Axios from "axios"
const token = localStorage.getItem('token')
const API_DEV_URL: string = 'https://localhost:8000/api'
const API_PROD_URL: string = 'https://hospiface.schuamealexandre.com/api'
let axios = Axios.create({
	baseURL: API_DEV_URL,
    headers: {
        "Authorization": "Bearer " + token
    }
})

export default axios