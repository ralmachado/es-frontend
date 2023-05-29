import axios from "axios";

export function apiInstance(){
    const getToken = (name: string) => {
        const tokenCookie = document.cookie.split(';');
        for (let i = 0; i < tokenCookie.length; i++) {
            const token = tokenCookie[i].trim();
            if (token.startsWith(`${name}=`)) {
                return decodeURIComponent(token.substring(name.length + 1));
            }
        }
        return "";
    };
    const token = getToken('token');
    const api = axios.create({
        baseURL: '/api',
    });
    api.defaults.headers.common['Authorization'] = `${encodeURIComponent(token)}`;
    return api;
}
