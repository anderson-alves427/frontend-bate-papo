import { errorInterceptor } from './interceptors/ErrorInterceptor';
import { reponseInterceptor } from './interceptors/Response.Interceptor';
import { Environment } from "./../../../environment/index";
import axios from "axios";



const Api = axios.create({
	baseURL: Environment.URL_BASE,
});


Api.interceptors.response.use(
    (response)=> reponseInterceptor(response),
    (error) => errorInterceptor(error),
);

export { Api };