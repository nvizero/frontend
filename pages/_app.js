import "@/public/css/main.css";
import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "@/actions/reducer";
const store = createStore(reducer);
const WrappedApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

 
export default  WrappedApp;
// export default App;
