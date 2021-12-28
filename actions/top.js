import useSWR from "swr";
import { fetcher } from "@/actions/index";

export const useTop = () => {
  const { data, error, ...rest } = useSWR("/api/v1/top", fetcher);
  let topDatas = data;
  return { topDatas, error, loading: !data && !error, ...rest };
};
