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
