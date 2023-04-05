import axios, { type AxiosRequestConfig } from "axios"

const handleResponse = async <T>(config:AxiosRequestConfig): Promise<T | null> =>{
	try{
		const { data } = await axios<T>(config);
		console.log({ data })
		return data;
	}catch(e:any){
		console.log(e.message);
		return null;
	}
}

const request = <T>(config:AxiosRequestConfig<T>)=>handleResponse<T>(config)

export default request;
