import axios, { type AxiosRequestConfig } from "axios";

import useSWR from "swr";

const handleResponse = async <T>(
  config: AxiosRequestConfig
): Promise<T | null> => {
  try {
    const { data } = await axios<T>(config);
    console.log({ data });
    return data;
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
};

const request = <T>(config: AxiosRequestConfig<T>) => handleResponse<T>(config);

export default request;

const fetcher = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export const useRoom = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/room/${id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
