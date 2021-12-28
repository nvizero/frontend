import useSWR from "swr";
import { fetcher } from "@/actions/index";
// import axios from 'axios';
export const useProducts = () => {
  const url  ="/api/v1/productList";  
  const { data, error, ...rest } = useSWR(url, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

//export const useGetProduct = (id, pdata) => axios.get(`/api/v1/product/${id}`, pdata);
export const useGetProduct = id => {
  const { data, error, ...rest} = useSWR(id ? `/api/v1/product/${id}` : null, fetcher);
  const pdata = data;
  return { pdata, error, prodloading: !data && !error, ...rest};
}