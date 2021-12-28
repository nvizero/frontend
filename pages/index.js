import Layout from "./components/layout";
import Top from "./components/layout/top";
import Services from "./components/layout/services";
import Product from "./components/layout/product";
import Banner from "./components/layout/banner";
import TrendSpad from "./components/layout/trendspad";
import { useProducts } from "@/actions/products";

export default function Home() {
  const { data, loading } = useProducts();

  return (
    <Layout loading={loading}>
      <Top />
      <Product datas={data} productLoading={loading} />
      <Banner />
      <TrendSpad />
      

      <Services />
    </Layout>
  );
}
