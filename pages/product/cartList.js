import Layout from "@/components/layout";
import { useDispatch, useSelector } from "react-redux";
const ProductDetail = (props) => {
  const prod = useSelector((state) => state.prod);
  const auth = useSelector((state) => state.auth);
  let { cartList, tidyCart } = prod;

 
  return (
    <Layout loading={false}>
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row cartlist">
          <div className="col-xl-9 col-md-8">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 bg-secondary">
              <span>Products</span>
              <a className="font-size-sm" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Continue shopping
              </a>
            </h2>

            {tidyCart?.map((cart, key) => {
              return (
                <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom" key={key}>
                  <div className="media d-block d-sm-flex text-center text-sm-left">
                    <a className="cart-item-thumb mx-auto mr-sm-4" href="#">
                      <img
                        src={`${process.env.image_url}${cart.image}`}
                        alt="Product"
                      />
                    </a>
                    <div className="media-body pt-3">
                      <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                        <a href="#">{cart.name}</a>
                      </h3>
                      <div className="font-size-sm">
                        <span className="text-muted mr-2">Size:</span>{cart.style1_name}
                      </div>
                      <div className="font-size-sm">
                        <span className="text-muted mr-2">Color:</span>{cart.style2_name}
                      </div>
                      <div className="font-size-lg text-primary pt-2">
                        ${cart.price}
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left">
                    <div className="form-group mb-2">
                      <label htmlFor="quantity1">Quantity</label>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        id="quantity1"
                        value={cart.num}
                      />
                    </div>
                    <button
                      className="btn btn-outline-secondary btn-sm btn-block mb-2"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-refresh-cw mr-1"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                      </svg>
                      Update cart
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm btn-block mb-2"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-trash-2 mr-1"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-xl-3 col-md-4 pt-3 pt-md-0">
            <h2 className="h6 px-4 py-3 bg-secondary text-center">Subtotal</h2>
            <div className="h3 font-weight-semibold text-center py-3">
              $325.00
            </div>
            <hr />
            <h3 className="h6 pt-4 font-weight-semibold">
              <span className="badge badge-success mr-2">Note</span>Additional
              comments
            </h3>
            <textarea
              className="form-control mb-3"
              id="order-comments"
              rows="5"
            ></textarea>
            <a className="btn btn-primary btn-block" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-credit-card mr-2"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Proceed to Checkout
            </a>
            <div className="pt-4">
              <div className="accordion" id="cart-accordion">
                <div className="card">
                  <div className="card-header">
                    <h3 className="accordion-heading font-weight-semibold">
                      <a
                        href="#promocode"
                        role="button"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="promocode"
                      >
                        Apply promo code
                        <span className="accordion-indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-up"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </span>
                      </a>
                    </h3>
                  </div>
                  <div
                    className="collapse show"
                    id="promocode"
                    data-parent="#cart-accordion"
                  >
                    <div className="card-body">
                      <form className="needs-validation" noValidate="">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="cart-promocode"
                            placeholder="Promo code"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Please provide a valid promo code!
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-primary btn-block"
                          type="submit"
                        >
                          Apply promo code
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="accordion-heading font-weight-semibold">
                      <a
                        className="collapsed"
                        href="#shipping"
                        role="button"
                        data-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="shipping"
                      >
                        Shipping estimates
                        <span className="accordion-indicator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-up"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </span>
                      </a>
                    </h3>
                  </div>
                  <div
                    className="collapse"
                    id="shipping"
                    data-parent="#cart-accordion"
                  >
                    <div className="card-body">
                      <form className="needs-validation" noValidate="">
                        <div className="form-group">
                          <select
                            className="form-control custom-select"
                            required=""
                          >
                            <option value="">Choose your country</option>
                            <option value="Australia">Australia</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Canada">Canada</option>
                            <option value="Finland">Finland</option>
                            <option value="Mexico">Mexico</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="United States">United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please choose your country!
                          </div>
                        </div>
                        <div className="form-group">
                          <select
                            className="form-control custom-select"
                            required=""
                          >
                            <option value="">Choose your city</option>
                            <option value="Bern">Bern</option>
                            <option value="Brussels">Brussels</option>
                            <option value="Canberra">Canberra</option>
                            <option value="Helsinki">Helsinki</option>
                            <option value="Mexico City">Mexico City</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Washington D.C.">
                              Washington D.C.
                            </option>
                            <option value="Wellington">Wellington</option>
                          </select>
                          <div className="invalid-feedback">
                            Please choose your city!
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="ZIP / Postal code"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Please provide a valid zip!
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-primary btn-block"
                          type="submit"
                        >
                          Calculate shipping
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  //   const res = await fetch(
  //     `${process.env.PRODUCT_API}api/v1/cartList/${ctx.params.id}`
  //   );
  //   const pro = await res.json();
  //   const product = pro.result;
  //   const attrib = product.attrib;
  //   const result = product.product;
  //   const buyToKnow = pro.buyToKnow;
  //   const pid = ctx.params.id;
  return { props: {} };
};

export default ProductDetail;
