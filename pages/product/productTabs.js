import { useState, useEffect } from "react";
import parse from 'html-react-parser';
const ProductTabs = (props) => {
  const [menuAct, setMenuAct] = useState("說明");
  const {pdata , prodloading} = props;
  let pdescription = prodloading===false ?pdata.description:"";
  let descripts = [
    {
      title: "說明",
      menuClass: "nav-link",
      contentClass: "tab-pane",
      p: pdescription,
    },     
    {
      title: "購買需知",
      menuClass: "nav-link",
      contentClass: "tab-pane",
      p: "Nemo enim ipsam voluptatem quia voluptas ",
    },
  ];

  let handleClick = (title) => {
    setMenuAct(title);
  };

  descripts = descripts.map((row, key) => {  
    const regex = new RegExp(menuAct);    
    if (regex.test(row.title)  ) {
      row.menuClass = "nav-link active";
      row.contentClass = "tab-pane active";
      return row;
    } else {
      return row;
    }
  });

  return (
    <div className="product__details__tab">
      <ul className="nav nav-tabs" role="tablist">
        {descripts.map((row, key) => {
          return (
            <li className="nav-item" key={key}>
              <a
                className={row.menuClass}
                data-toggle="tab"
                href={"#"+key}
                role="tab"
                onClick={()=> handleClick(row.title) }
              >
                {row.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tab-content">
        {descripts.map((row, key) => {
          return (
            <div className={row.contentClass} role="tabpanel" key={key}>
              <h6>{row.title}</h6>
              {parse(row.p)}              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTabs;
