import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSidebar } from "@/actions/sidebar";
import * as gtag from '@/lib/gtag'
const sidebarType = [
  "card-heading active",
  "card-heading",
  "collapse show",
  "collapse",
];
function Sidebar() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [up, setUp] = useState(0);
  const [activeOut, setActiveOut] = useState(sidebarType[1]);
  const [activeIn, setActiveIn] = useState(sidebarType[2]);
  //data from
  const { sidebarDatas, loading } = useSidebar();
  const dispatch = useDispatch();
  const updatePrice = () => {
    gtag.event({
      action: 'submit_form',
      category: 'product filter',
      label: 'udpate price'
    });
    dispatch({
      type: "UPDATE_PRICE",
      payload: { min, max },
    });
  };
  const updateActiveMenu = (active, position) => {
    
    setUp(position);
    setActiveOut(active === sidebarType[1] ? sidebarType[0] : sidebarType[1]);
    setActiveIn(activeOut === sidebarType[0] ? sidebarType[2] : sidebarType[3]);
  };

  let womenMenus = "";
  if (sidebarDatas !== undefined && loading === false) {
    womenMenus = sidebarDatas.map((item, key) => {
      return (
        <div className="card" key={key}>
          <div className={up === key ? activeOut : sidebarType[0]}>
            <a onClick={() => updateActiveMenu(activeOut, key)}>{item.title}</a>
          </div>
          <div
            id="collapseOne"
            className={up === key ? activeIn : sidebarType[3]}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <ul>
                {item.sub
                  ? item.sub.map((subItem, subKey) => {
                      return (
                        <li key={subKey}>
                          <a href=".">{subItem.title}</a>
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="col-lg-3 col-md-3">
        <div className="shop__sidebar">
          <div className="sidebar__categories">
            <div className="section-title">
              <h4>分類</h4>
            </div>
            <div className="categories__accordion">
              <div className="accordion" id="accordionExample">
                {womenMenus}
              </div>
            </div>
          </div>
          <div className="sidebar__filter">
            <div className="section-title">
              <h4>Shop by price</h4>
            </div>
            <div className="filter-range-wrap">
              <div
                className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                data-min="33"
                data-max="99"
              ></div>
              <div className="range-slider">
                <div className="price-input">
                  <p>Price:</p>
                  <input
                    type="text"
                    id="minamount"
                    onChange={(e) => {
                      setMin(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    id="maxamount"
                    onChange={(e) => {
                      setMax(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <a href="#" onClick={updatePrice}>
              搜尋
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
