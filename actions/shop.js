import useSWR from "swr";
import { fetcher } from "@/actions/index";

export const useShop = () => {
  const { data, error, ...rest } = useSWR("/api/v1/shop", fetcher);
  let shopDatas = data;
  return { shopDatas, error, loading: !data && !error, ...rest };
};
