import axios from "axios";

class BaseApi {
  constructor(accessToken, subPath) {
    this.config = {};
    if (accessToken) {
      //   this.config.headers = {
      //     authorization: `Bearer ${accessToken}`,
      //   };
    }
    //this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
    this.apiUrl = `${process.env.PRODUCT_API}${"api/v1"}` + subPath;
    this.apiAuthUrl = `${process.env.PRODUCT_API}${"api/auth"}` + subPath;
  }

  getAll() {
    let url = `${this.apiUrl}`;
    let resp = axios.get(url);
    // resp.then(successCallback, failureCallback);
    // function successCallback(result) {
    //   console.log(result.data);
    //   return result.data;
    // }

    // function failureCallback(error) {
    //   console.log("It failed with " + error);
    // }
    return resp;
  }

  update(id, data) {
    return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
  }

  getByUser() {
    return axios.get(`${this.apiUrl}/me`, this.config);
  }

  getById(id) {
    return axios.get(`${this.apiUrl}/${id}`);
  }

  getBySlug(slug) {
    return axios.get(`${this.apiUrl}/s/${slug}`);
  }

  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

  register(data) {
    console.log(`${this.apiAuthUrl}`);
    console.log("..........................");
    console.log(data);
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return axios({
      method: "post",
      url: `${this.apiAuthUrl}`,
      data: data,
      headers: headers,
    });
    // return axios.post(`${this.apiAuthUrl}`, data);
  }
}

export default BaseApi;
