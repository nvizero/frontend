import Link from "next/link";
function TrendSpad(props) {
  const { datas, productLoading } = props;
  let renderHtml;
  if (productLoading === false && datas !== undefined) {
    // sort(() => Math.random() - 0.5)
    renderHtml = datas.map((row, key) => {
      return 3 > key ? (
        <div className="trend__item" key={key}>
          <div className="trend__item__pic">
            <img
              src={`${process.env.image_url}${row.image[0]}`}
              alt=""
              style={{
                with: "90px",
                height: "90px",
              }}
            />
          </div>
          <div className="trend__item__text">
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
      ) : (
        ""
      );
    });
  }
  return (
    <section className="trend spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>Hot Trend</h4>
              </div>
              {renderHtml}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>Best seller</h4>
              </div>
              {renderHtml}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
              <div className="section-title">
                <h4>Feature</h4>
              </div>
              {renderHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendSpad;
