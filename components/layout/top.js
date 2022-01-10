
import { useTop } from "@/actions/top";

function Top() {
  const { topDatas, loading } = useTop();
  let subTop = '';
  if (loading === false) {
    subTop = topDatas.sub.map((item, key) => {
      return (
        <div className="col-lg-6 col-md-6 col-sm-6 p-0" key={key}>
          <div
            className="categories__item set-bg"
            style={{
              backgroundImage: "url(" + item.img + ")",
            }}
          >
            <div className="categories__text">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <TopMain
              data={loading === false ? topDatas.main[0] : ""}
              loading={loading}
            />
          </div>
          <div className="col-lg-6">
            <div className="row">{subTop}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

let TopMain = ({ data, loading }) => {
  return (
    <div
      className="categories__item categories__large__item set-bg"
      style={{
        backgroundImage: "url(" + (loading === false ? data.img : "") + ")",
      }}
    >
      <div className="categories__text">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <a href="">Shop now</a>
      </div>
    </div>
  );
};

export default Top;
