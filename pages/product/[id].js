import Layout from "@/components/layout";
import { useProducts } from "@/actions/products";
import ProductList from "@/components/product/productList";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ProductTabs from "@/components/product/productTabs";


const ProductDetail = (props) => {  
  let { result ,attrib, buyToKnow } = props;
   const router = useRouter();
  // const { pdata, prodloading } = useGetProduct(router.query.id);
  const { data, loading } = useProducts();
  useEffect(() => {}, [result]);
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  
  return (
    <Layout title={result.name} loading={false} descript={result.little+" "+result.descript} img={result.image[0]}>
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
                  <span> {result.little} </span>
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
                  $ {result.price} <span>$ {result.taiwan_price}</span>
                </div>
                <p>
                {result.txt}
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
              <ProductTabs pdata={result} prodloading={false} buyToKnow={buyToKnow} />
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


 

export const getServerSideProps = async ctx => {
  
  const res = await fetch(`${process.env.PRODUCT_API}api/v1/product/${ctx.params.id}`);
  const pro = await res.json();  
  const product  = pro.result;  
  const attrib   = product.attrib;
  const result   = product.product;
  const buyToKnow = pro.buyToKnow;
  return {props : { result ,attrib, buyToKnow} };
}


// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   let  url = `${process.env.PRODUCT_API}`+'api/v1/productList';  
//   const res = await fetch(url)
//   const posts = await res.json()
//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }
//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//   // console.log(params , '...3');
//   // const { id } = context.query;
//   const res = await fetch(`${process.env.PRODUCT_API}api/v1/product/${params.id}`);
//   let result = await res.json();
//   return {
//     props: { result }, // will be passed to the page component as props
//   };
// }

export default ProductDetail;
