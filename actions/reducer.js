const ADD_TODOLIST = "ADD_TODOLIST";
const INITIAL_PRODUCTS = "INITIAL_PRODUCTS";
const UPDATE_PRICE = "UPDATE_PRICE";

const initState = {
  todoList: ["first"],
  priceMin: 0,
  priceMax: 0,
  productList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      const tempTodo = state.todoList.map((list) => list);
      tempTodo.push(action.payload.listName);
      return {
        todoList: tempTodo,
      };
    }
    case INITIAL_PRODUCTS: {
      
      return {
        productList: action.payload.shopDatas,
      };
    }
    case UPDATE_PRICE: {
      let newProducts = "";

      let min = action.payload.min !== "" ? action.payload.min : 0;
      let max = action.payload.max !== "" ? action.payload.max : 0;
      if (min > 1 && min != "") {
        newProducts = state.productList.filter((row) => {
          return row.price >= min;
        });
      }
      if (max > 1 && min != "") {
        newProducts = state.productList.filter((row) => {
          return row.price <= max;
        });
      }
      return {
        priceMin: action.payload.min,
        priceMax: action.payload.max,
        productList: (newProducts === "") ? state.productList : newProducts,
      };
    }
    default:
      return state;
  }
};

export default reducer;
