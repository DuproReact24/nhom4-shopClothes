import axios from 'axios'


const api = axios.create({
baseURL: '/api', // change to your backend base URL
headers: {
'Content-Type': 'application/json',
},
})


// add token interceptor if you store token in localStorage
api.interceptors.request.use((config) => {
const token = localStorage.getItem('token')
if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
return config
})


export default api