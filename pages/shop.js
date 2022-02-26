import Layout from "@/components/layout";
import Sidebar from "@/components/product/sidebar";
import ProductList from "@/components/product/productList";
import Paginage from "@/components/paginage";
import Breadcrumb from "@/components/breadcrumb";
import { useShop } from "@/actions/shop";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
const Shop = (props) => {
  const router = useRouter();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { shopDatas, loading } = useShop();
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    if (shopDatas !== undefined) {      
      let pdata = shopDatas.data;      
      dispatch({
        type: "INITIAL_PRODUCTS",
        payload: { pdata, shopDatas },
      });
      setLoad(false);
    }
  }, [shopDatas,router.query.page]);

  return (
    <Layout title={"Shop"} loading={loading}>
      <Breadcrumb />
      {loading === false ? (
        <section className="shop spad">
          <div className="container">
            <div className="row">
              <Sidebar />
              <div className="col-lg-9 col-md-9">
                <div className="row">
                  <ProductList
                    shopDatas={shopDatas.data}
                    loading={load}
                    limit={9}
                    bstclass={"col-lg-4 col-md-6"}
                  />
                  <Paginage links={shopDatas.links} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Shop;
