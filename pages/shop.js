import Layout from "./components/layout";
import Sidebar from "./components/shop/sidebar";
import ProductList from "./components/shop/productList";
import Paginage from "./components/paginage";
import Breadcrumb from "./components/breadcrumb";
import { useShop } from "@/actions/shop";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Shop = (props) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { shopDatas, loading } = useShop();

  useEffect(() => {
    dispatch({
      type: "INITIAL_PRODUCTS",
      payload: { shopDatas },
    });
  }, [shopDatas]);

  return (
    <Layout title={"Shop"}>
      <Breadcrumb />
      <section className="shop spad">
        <div className="container">
          <div className="row">
            <Sidebar />
            <div className="col-lg-9 col-md-9">
              <div className="row">
                <ProductList shopDatas={shopDatas} loading={loading} limit={9} bstclass={'col-lg-4 col-md-6'} />
                <Paginage />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;