function Offcanvas() {
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li>
            <span className="icon_search search-switch"></span>
          </li>
          <li>
            <a href="#">
              <span className="icon_heart_alt"></span>
              <div className="tip">2</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon_bag_alt"></span>
              <div className="tip">2</div>
            </a>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src={"/img/logo.png"} alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <a href="#">Login1</a>
          <a href="#">Register2</a>
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
