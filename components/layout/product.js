import { useState } from "react";
import { useCategory } from "@/actions/categories";
import ProductList from "@/components/product/productList";

const Product = (props) => {
  const { datas, productLoading } = props;
  const { cateogiesData, loading } = useCategory();
  const [productActive, setProductActive] = useState("所有");
  const [productFilter, setProductFilter] = useState(datas);

  function activeMenu(cate) {
    setProductActive(cate);
    const regex = new RegExp(cate);
    let filtered = datas.data.filter(function (item, key) {
      if (cate === "所有") {
        return item;
      } else {
        return regex.test(item.tags);
      }
    });
    setProductFilter(filtered);
  }
  let categories ="" ;
  //動態選單
  if (cateogiesData !== undefined) {
    categories = cateogiesData.map((cate, key) => {
      if (cate.title === productActive) {
        return (
          <li
            key={key}
            className="active"
            onClick={() => activeMenu(cate.title)}
          >
            {cate.title}
          </li>
        );
      } else {
        return (
          <li key={key} onClick={() => activeMenu(cate.title)}>
            {cate.title}
          </li>
        );
      }
    });
  }

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">{categories}</ul>
          </div>
        </div>

        <div className="row property__gallery">
          <ProductList
            shopDatas={productFilter}
            loading={productLoading}
            limit={8}
            bstclass={"col-lg-3 col-md-4 col-sm-6"}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
