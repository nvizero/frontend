import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
import qs from "qs";
// 登录
export const addCart = createAsyncThunk(
  "/prod/addCart",
  async (credentials, thunkAPI) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${credentials.accessToken}` },
      };
      const bodyParameters = {
        style1: credentials.style1,
        style2: credentials.style2,
        product_id: credentials.product_id,
        price: credentials.price,
        num: credentials.num,
        user_id: credentials.user_id,
      };
      // 获取token信息
      const response = await axios
        .post(
          `${process.env.PRODUCT_API}api/order/addToCart`,
          qs.stringify(bodyParameters),
          config
        )
        .then((response) => {
          return response;
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            return error.response;
          } else {
            return error;
          }
        });
      if (response.status === 200) {
        // 获取用户信息
        // console.log(response.data);
        // console.log(response.data.cart);
        
        return {
          cartList: response.data.cart,
          cartCount: response.data.count
        };
      } else {
        console.log(response, response.status, ".....");
        return thunkAPI.rejectWithValue({
          errorMsg: response.data.message,
          status: response.status,
        });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMsg: error.message });
    }
  }
);

// 初始化数据
const initialState = { cartList: [], prevItem: [], cartCount: 0, status: 0 };

export const prodSlice = createSlice({
  name: "prod",
  initialState: initialState,
  reducers: {
    updateProd: (state, action) => {      
      let { style1, style2, product_id, price, num } = action.payload;
      let prod = ssstore.getState().prod;
      state.count = state.count + 1;      
    },
    decrement: (state, action) => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
  },
  extraReducers: {
    // 水合，拿到服务器端的reducer注入到客户端的reducer，达到数据统一的目的
    [HYDRATE]: (state, action) => {
      // console.log("HYDRATE", state, action.payload);
      return Object.assign({}, state, { ...action.payload.prod });
    },
    [addCart.fulfilled]: (state, action) => {
      console.log(action);
      // state.accessToken = action.payload.accessToken;
      // state.isLogin = action.payload.isLogin;
      // state.me = action.payload.me;
      state.status = true;
    },
    [addCart.rejected]: (state, action) => {      
      state.cartList = null;
      state.prevItem = null;
      state.count = null;
      state.status = action.payload.status ? action.payload.status : null;
    },
  },
});

export const { updateProd } = prodSlice.actions;
export default prodSlice.reducer;
