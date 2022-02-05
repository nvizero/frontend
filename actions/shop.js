import useSWR from "swr";
import { fetcher } from "@/actions/index";
import { useRouter } from 'next/router'
export const useShop = () => {
  const router = useRouter();
  let page = 1;
  if(router.query.page ){
    page=router.query.page ;
  } 
  let { data, error, ...rest } = useSWR(`/api/v1/shop?page=${page}`, fetcher); 
  let shopDatas = data;
  return { shopDatas, error, loading: !data && !error, ...rest };
};
