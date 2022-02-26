import React, { useState, useEffect } from "react";

import Layout from "@/components/layout";
import ReactGA from "react-ga";
import { useForm } from "react-hook-form";
import { connect, useDispatch, useStore, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "@/store/slices/auth";
import { wrapper } from "@/store";
ReactGA.pageview("login");

function Login(props) {
  const router = useRouter()
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {    
    (async () => {
      let {email , password} = data;      
      let res = await dispatch(
        login({
          grant_type: "password",
          email,
          password,
        })
      );    
      
      if(res.payload.isLogin){
        router.push("/")
      }
      
    })();
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-12 mx-auto">
            <div className="card flex-row my-5 border-0  rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  登入 
                </h5>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                      {...register("email", {
                        required: "this is a required",
                      })}
                    />
                    <label htmlFor="floatingInputEmail">Email </label>
                    {errors.email && errors.email.message}
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      {...register("password", {
                        required: "this is a required",
                      })}
                    />
                    <label htmlFor="floatingPassword">密碼</label>
                    {errors.Password && errors.Password.message}
                  </div>

                  <div className="d-grid mb-2">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    >
                      登入
                    </button>
                  </div>

                  {/* <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign up with
                      Facebook
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
// export default connect()(Login);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ ctx }) => {
      const { isLogin, me } = store.getState().auth;
      if (isLogin) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
      return {
        props: {},
      };
    }
);

export default Login;
