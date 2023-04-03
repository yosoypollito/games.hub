import axios, { type AxiosRequestConfig } from "axios"

const handleResponse = async <T>(config:AxiosRequestConfig<T>): Promise<T | null> =>{
	try{
		const { data } = await axios(config)
		return data;
	}catch(e){
		return null;
	}
}

const request = <T>(config:AxiosRequestConfig<T>)=>handleResponse<T>(config)

export default request;
