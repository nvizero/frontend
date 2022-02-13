import { useState, useEffect } from "react";
const ProductWidget = (props) => {
  const { attrib } = props;
  const [style1, setstyle1] = useState("");
  const [style2, setstyle2] = useState("");
  const [atv1, setAtv1] = useState([]);
  const [atv2, setAtv2] = useState([]);
//   let atv = [];
  const handleClick = (k ,k2,cate_id) => {        
    if(k===0){
        setstyle1(cate_id);
        setAtv1({i:k , i2:k2})
    }else{
        setstyle2(cate_id);
        setAtv2({i:k , i2:k2})
    }    
  };
    
  return (
    <div className="product__details__widget">
      <ul>
        {attrib.map((att, key) => {
          return (
            <li key={key}>
              <div>{key === 0 ? "顏色 " : "大小 "} : </div>
              <div className="size__btn">
                {att.map((row, key2) => {
                    // console.log(row,atv);
                  return (
                    <label
                      htmlFor="xs-btn"
                      key={key2}
                      onClick={() => handleClick(key , key2, row.id)}
                      className={( (atv1.i===key && atv1.i2===key2 )? "active" :"") + ((atv2.i===key && atv2.i2===key2 )? "active" :"") }
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
  );
};

export default ProductWidget;
