import Layout from "@/components/layout";
import { useProducts } from "@/actions/products";
import ProductList from "@/components/product/productList";
import ProductStyle from "@/components/product/productStyle";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductTabs from "@/components/product/productTabs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-tabs/style/react-tabs.css";
const ProductDetail = (props) => {
  let { result, attrib, buyToKnow, pid } = props;
  const router = useRouter();
  const { data, loading } = useProducts();
  let pdata = false;
  if (loading === false) {
    pdata = data.data.sort(() => Math.random() - 0.5);
  }
  let seodescription = "";
  useEffect(() => {
    seodescription = result.description;
  }, [result]);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout
      title={result.name}
      loading={false}
      descript={result.txt}
      img={`${process.env.image_url}${result.image[0]}`}
      canonicalUrl={`http://lyra-buy.com/product/${pid}`}
    >
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <Carousel>
                  {result.image.map((row, key) => (
                    <div key={key}>
                      <img src={`${process.env.image_url}${row}`} />
                      {/* <p className="legend">{row._id}</p> */}
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-lg-6">               
                <ProductStyle attrib={attrib} result={result} />               
            </div>
            <div className="col-lg-12">
              <ProductTabs
                pdata={result}
                prodloading={false}
                buyToKnow={buyToKnow}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>猜你喜歡</h5>
              </div>
            </div>
            <ProductList
              shopDatas={pdata}
              loading={loading}
              limit={4}
              bstclass={"col-lg-3 col-md-4 col-sm-6"}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `${process.env.PRODUCT_API}api/v1/product/${ctx.params.id}`
  );
  const pro = await res.json();
  const product = pro.result;
  const attrib = product.attrib;
  const result = product.product;
  const buyToKnow = pro.buyToKnow;
  const pid = ctx.params.id;
  return { props: { result, attrib, buyToKnow, pid } };
};


export default ProductDetail;
