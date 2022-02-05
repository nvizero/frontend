 
const INITIAL_PRODUCTS = "INITIAL_PRODUCTS";
const UPDATE_PRICE = "UPDATE_PRICE";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const initState = {
  todoList: ["first"],
  priceMin: 0,
  priceMax: 0,
  productList: [],
  is_login: 0,
  user_token: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE: {
      //登入 存TOKEN      
      // console.table(action.payload , '......');
      return {
        user_token: action.payload.token,
        is_login: action.payload.status
      };
    }

    case INITIAL_PRODUCTS: {      
      return {        
        productList: action.payload.pdata,
      };
    }

    case UPDATE_PRICE: {
      let newProducts = "";
      let min = action.payload.min !== "" ? parseInt(action.payload.min) : 0;
      let max = action.payload.max !== "" ? parseInt(action.payload.max) : 0;
      if (min > 1 && min != "" && min != 0) {
        newProducts = state.productList.map((row) => {
          if (row.price >= min) {
            return row;
          }
        });
      }
      if (max > 1 && max != "" && max != 0) {
        newProducts = state.productList.map((row) => {
          if (row.price <= max) {
            return row;
          }
        });
      }
      newProducts = newProducts.filter((e) => e);
      return {
        priceMin: action.payload.min,
        priceMax: action.payload.max,
        productList: newProducts,
      };
    }
    default:
      return state;
  }
};

export default reducer;
 