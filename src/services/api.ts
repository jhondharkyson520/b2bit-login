import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { logout } from "../context/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";


export function setupAPIClient( context?: any ){

    let cookies = parseCookies( context );

    const api = axios.create({
        baseURL: 'https://api.homologation.cliqdrive.com.br',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    });

    api.interceptors.response.use( response => {
        return response;

    }, ( error: AxiosError ) => {

        if( error.response?.status === 401 ){

            if(typeof window !== undefined ){

                logout();

            } else {

                return Promise.reject( new AuthTokenError() );

            }
            
        }

        return Promise.reject(error);
    })

    return api;

}