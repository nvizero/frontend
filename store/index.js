import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import {nextReduxCookieMiddleware, wrapMakeStore} from "next-redux-cookie-wrapper";
import {authSlice} from '@/store/slices/auth';
import logger from "redux-logger";

const combinedReducers = combineReducers({
  [authSlice.name]: authSlice.reducer
});
export const store = wrapMakeStore(() => configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      nextReduxCookieMiddleware({
        // 在这里设置你想在客户端和服务器端共享的cookie数据，我设置了下面三个数据，大家依照自己的需求来设置就好
        subtrees: ["auth.accessToken", "auth.isLogin", "auth.me"],
      })
    ).concat(logger)
}));
const makeStore = () => store;
export const wrapper = createWrapper(store, {storeKey: 'key', debug: true});