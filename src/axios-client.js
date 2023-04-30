import axios from "axios";
import { removeToken, getToken } from "./context/AuthContext";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1/admin`
})

const axiosAdminClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1/admin`
})

const parts = window.location.host.split('.');
const tenant = parts[0];

const axiosLibrarianClient = axios.create({
    baseURL: `${tenant}.${import.meta.env.VITE_API_BASE_URL}/api/v1/librarian`
})

const axiosUserClient = axios.create({
    baseURL: `${tenant}.${import.meta.env.VITE_API_BASE_URL}/api/v1/user`
})

const axiosLogout = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1/logout`
})

axiosClient.interceptors.request.use((config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { response } = error;
    if (response === 401) {
        removeToken()
        // window.location.reload();
    } else if (response.status === 404) {
        //Show not found
    }

    throw error;
});

export default axiosClient

export {
    axiosLibrarianClient,
    axiosUserClient,
    axiosLogout,
    axiosAdminClient
}