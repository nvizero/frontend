import { useState, useEffect } from "react";
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { addCart } from "@/store/slices/prod";
import { useRouter } from "next/router";
import { logout } from "@/store/slices/auth";
const productStyle = (props) => {
  const { result, attrib } = props;
  const [style1, setstyle1] = useState("");
  const [style2, setstyle2] = useState("");
  const [num, setNum] = useState(1);
  const [price, setPrice] = useState(0);
  const [atv1, setAtv1] = useState([]);
  const [atv2, setAtv2] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const prod = useSelector((state) => state.prod);
  const router = useRouter();
  const handAddToCart = () => {
    
    if (style1 !== false && style2 !== false && num !== 0 && price !== 0) {
      dispatch(
        addCart({
          style1: style1,
          style2: style2,
          product_id: result.id,
          price: price,
          num: parseInt(num),
          accessToken: auth.accessToken,
          user_id: auth.me.user_id,
        })
      );
      if (prod.status === 401) {
        const res = dispatch(logout());
        if (res.payload) {
          Cookies.remove("auth.me"); 
          Cookies.remove("auth.isLogin"); 
          Cookies.remove("auth.accessToken");
        }
        router.push("/login");
      }
    }
  };
  const updateNum = (evt) => {
    if (evt.target.value !== "") {
      setNum(parseInt(evt.target.value));
    }
  };
  const handleClick = (k, k2, cate_id) => {
    if (k === 0) {
      setstyle1(cate_id);
      setAtv1({ i: k, i2: k2 });
    } else {
      setstyle2(cate_id);
      setAtv2({ i: k, i2: k2 });
    }
  };
  useEffect(() => {
    setPrice(parseInt(result.price));
  }, []);
  return (
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
        {/* <span>( 138 reviews )</span> */}
      </div>
      <div className="product__details__price">
        $ {result.price} <span>$ {result.taiwan_price}</span>
      </div>
      <p>{result.txt}</p>
      <div className="product__details__button">
        <div className="quantity">
          <span>數量:</span>
          <div className="pro-qty">
            <input
              type="text"
              defaultValue="1"
              onChange={(evt) => updateNum(evt)}
            />
          </div>
        </div>
        <span className="cart-btn" onClick={() => handAddToCart()}>
          <span className="icon_bag_alt"></span>加入購物車
        </span>
        {/* <ul>
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
        </ul> */}
      </div>
      <div className="product__details__widget">
        <ul>
          {attrib.map((att, key) => {
            return (
              <li key={key}>
                <div>{key === 0 ? "" : ""} </div>
                <div className="size__btn">
                  {att.map((row, key2) => {
                    return (
                      <label
                        htmlFor="xs-btn"
                        key={key2}
                        onClick={() => handleClick(key, key2, row.id)}
                        className={
                          (atv1.i === key && atv1.i2 === key2
                            ? " active"
                            : " circle") +
                          (atv2.i === key && atv2.i2 === key2
                            ? " active"
                            : " circle") +
                          " prod_select"
                        }
                      >
                        {row.name}
                      </label>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default productStyle;
