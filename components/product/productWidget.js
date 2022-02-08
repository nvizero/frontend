import { useState, useEffect } from "react";
const ProductWidget = (props) => {  
  const { attrib } = props;  
  return (
    <div className="product__details__widget">
      <ul>
        {attrib.map((att, key) => {
          return (
            <li key={key}>
              <span>Available color:</span>
              <div className="size__btn">
                {att.map((row, key2) => {
                  return (
                    <label htmlFor="xs-btn"   key={key2}>
                    <input type="radio" id="xs-btn" />
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
