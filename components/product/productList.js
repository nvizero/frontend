import Link from "next/link";

const ProductList = ({ shopDatas, loading, limit, bstclass }) => {
  let renderHtml = "";

  if (loading === false && shopDatas !== undefined) {
    renderHtml = shopDatas.map((row, key) => {
      let img = row.avatar ? row.avatar :row.image[0] ;
      return limit > key ? (
        <div className={bstclass} key={key}>
          <div className="product__item">
            <Link
              href={{
                pathname: "/product/[id]",
                query: {
                  id: row.id,
                },
              }}
            >
              <a href="#">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage:
                      "url(" + `${process.env.image_url}` + img + ")",
                  }}
                >
                  {row.tag ? (
                    <div className={"label " + row.tag.type} key={key}>
                      {row.tag.name}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <ul className="product__hover">
                <li>
                  <a href="img/shop/shop-1.jpg" className="image-popup">
                    <span className="arrow_expand"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon_heart_alt"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon_bag_alt"></span>
                  </a>
                </li>
              </ul> */}
                </div>
              </a>
            </Link>
            <div className="product__item__text">
              <h6>
                <Link
                  href={{
                    pathname: "/product/[id]",
                    query: {
                      id: row.id,
                    },
                  }}
                >
                  <a href="#">{row.name}</a>
                </Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="product__price">$ {row.price}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      );
    });
  }

  return <>{renderHtml}</>;
};
export default ProductList;
