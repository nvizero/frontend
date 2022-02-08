import Layout from "@/components/layout";
import Top from "@/components/layout/top";
import Services from "@/components/layout/services";
import Product from "@/components/layout/product";
import Banner from "@/components/layout/banner";
import TrendSpad from "@/components/layout/trendspad";
import { useProducts } from "@/actions/products";
import ReactGA from 'react-ga';
ReactGA.pageview('index' );

export default function Home() {
  const { data, loading } = useProducts();
  let TrendSpadData = false ;
  if(loading===false){
    TrendSpadData =data.data;
  }
  return (
    <Layout loading={loading}>
      <Top />
      <Product datas={TrendSpadData} productLoading={loading} /> 
      <Banner />
      <TrendSpad datas={TrendSpadData} productLoading={loading} /> 
      

      <Services />
    </Layout>
  );
}
