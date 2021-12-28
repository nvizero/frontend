import useSWR from "swr";
import { fetcher } from "@/actions/index";

export const useCategory = () => {
  const { data, error, ...rest } = useSWR("/api/v1/categories", fetcher);
  const cateogiesData = data;
  return { cateogiesData, error, loading: !data && !error, ...rest };
};
