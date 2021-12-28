import useSWR from "swr";
import { fetcher } from "@/actions/index";

export const useSidebar = () => {
  const { data, error, ...rest } = useSWR("/api/v1/sidebar", fetcher);
  let sidebarDatas = data;
  return { sidebarDatas, error, loading: !data && !error, ...rest };
};
