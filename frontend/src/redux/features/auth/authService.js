import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = '/api/users/'


// Register User

const register = async (userData) => {
    const response = await axios.post(API_URL+ 'register', userData)

    console.log("Register Service : ",response.data.data.access_token);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data.data.access_token))
    }

    return response.data

}

// login User

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    console.log("Login Service : ",response.data.access_token);

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data.access_token))
    }

    return response.data

}

// Logout User

const logout = () => {
    localStorage.removeItem('user')
    toast.success("Successfully Logged Out" ,{autoClose:1000})
}



const authService = {
    register, logout, login
}

export default authService