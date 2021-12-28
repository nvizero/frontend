import Link from "next/link";
function Breadcrumb() {
  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link href={"/"}>
                  <a href="./index">
                    <i className="fa fa-home"></i> Home
                  </a>
                </Link>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
