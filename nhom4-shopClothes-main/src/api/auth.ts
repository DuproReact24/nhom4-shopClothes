import api from './axios'


type AuthResponse = {
token?: string
email: string
name?: string
}


export const login = async (data: { email: string; password: string }) => {
// example: replace with your backend route
const res = await api.post('/auth/login', data)
// store token
if (res.data?.token) localStorage.setItem('token', res.data.token)
return res.data as AuthResponse
}


export const registerUser = async (data: { email: string; password: string; name?: string }) => {
const res = await api.post('/auth/register', data)
if (res.data?.token) localStorage.setItem('token', res.data.token)
return res.data as AuthResponse
}


export const fetchProfile = async () => {
const res = await api.get('/auth/me')
return res.data as AuthResponse
}