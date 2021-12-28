import Layout from "../components/layout";
import { useProducts } from "@/actions/products";
import ProductList from "@/pages/components/shop/productList";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { useGetProduct } from "actions/products";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ProductTabs from "@/pages/product/productTabs";
// import useSWR from "swr";
// import { fetcher } from "@/actions/index";



const ProductDetail = (props) => {  
  let { result } = props;
  // const router = useRouter();
  // const { pdata, prodloading } = useGetProduct(router.query.id);
  const { data, loading } = useProducts();
  useEffect(() => {}, [result]);

  return (
    <Layout title={"Shop"} loading={false}>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <Carousel>
                  {  result.image.map((row, key) => (
                        <div key={key}>
                          <img src={`${process.env.image_url}${row}`} />
                          {/* <p className="legend">{row._id}</p> */}
                        </div>
                      ))
                    }
                </Carousel>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  {result.name}
                  <span>Brand: SKMEIMore Men Watches from SKMEI</span>
                </h3>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span>( 138 reviews )</span>
                </div>
                <div className="product__details__price">
                  $ {result.price} <span>$ 83.0</span>
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
                  fugit, sed quia consequuntur magni lores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="text" defaultValue="1" />
                    </div>
                  </div>
                  <a href="#" className="cart-btn">
                    <span className="icon_bag_alt"></span> Add to cart
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_adjust-horiz"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input type="radio" name="color__radio" id="red" />
                          <span className="checkmark"></span>
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg"></span>
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <ProductTabs pdata={result} prodloading={false} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            <ProductList
              shopDatas={data}
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

export async function getServerSideProps(context) {
  
  const { id } = context.query;
  const res = await fetch(`${process.env.PRODUCT_API}api/v1/product/${id}`);
  let result = await res.json();
  return {
    props: { result: result }, // will be passed to the page component as props
  };
}

export default ProductDetail;
