import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import * as cookie from 'cookie';
import * as setCookie from 'set-cookie-parser';
// Create axios instance.
const axiosInstance = axios.create({
  baseURL: `${process.env.PRODUCT_API}`,
  withCredentials: false,
});
export default axiosInstance;