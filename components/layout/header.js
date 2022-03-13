import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/auth";
let Menu = (props) => {
  const { datas, router } = props;
  let pathname = router.pathname;
  let mainMenu = datas.map((item, key) => {
    let _active = pathname === item.link ? "active" : "";
    return (
      <li key={key} className={_active}>
        <Link href={item.link}>
          <a href="./index">{item.title}</a>
        </Link>
      </li>
    );
  });

  let subMenu = datas.map((subItem, key) => {
    let _active = pathname === subItem.link ? "active" : "";

    if (subItem.subMenus) {
      return subItem.subMenus.map((sub, _key) => {
        return (
          <li key={_key} className={_active}>
            <Link href={sub.link}>
              <a href="./index">{sub.title}</a>
            </Link>
          </li>
        );
      });
    }
  });

  return (
    <>
      <nav className="header__menu">
        <ul>
          {mainMenu}
          {/* <li>
            <a href="#">Pages</a>
            <ul className="dropdown">{subMenu}</ul>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

const AuthStatus = ({ auth }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    (async () => {
      try {
        const rawResponse = await fetch("/api/v1/logout", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `${auth.accessToken}`,
          },
        });
        const content = await rawResponse.json();
      } catch (e) {
        console.log(e);
      }
    })();

    const res = dispatch(logout());
    if (res.payload) {
      Cookies.remove("auth.me"); // fail!
      Cookies.remove("auth.isLogin"); // fail!
      Cookies.remove("auth.accessToken"); // fail!
    }
    router.push("/login");
  };

  return (
    <>
      <a href="#" onClick={() => handleLogout()}>
        登出
      </a>
    </>
  );
};

function Header() {
  const auth = useSelector((state) => state.auth);
  const prod = useSelector((state) => state.prod);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (auth.isLogin === true) {
      setIsLogin(true);
    }
  }, [auth]);
  let menus = [
    {
      key: 1,
      title: "HOME",
      link: "/",
      active: "/",
    },
    {
      key: 2,
      title: "SHOP",
      link: "/shop",
      active: "/shop",
    },
    {
      key: 3,
      title: "聯絡我們",
      link: "/contact",
      active: "/contact",
    },
  ];

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <Link href={{ pathname: "/" }}>
                <a>
                  <img src={"/img/logo.png"} alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <Menu datas={menus} router={router} />
          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                {isLogin === true ? (
                  <AuthStatus auth={auth} />
                ) : (
                  <>
                    <Link href={"/login"}>
                      <a href="#" className="header_login">
                        登入
                      </a>
                    </Link>
                    <Link href={"/register"}>
                      <a href="#" className="header_register">
                        註冊
                      </a>
                    </Link>
                  </>
                )}
              </div>
              <ul className="header__right__widget">
                <li>
                  <span className="icon_search search-switch"></span>
                </li>
                {/*
                <li>
                  <a href="#">
                    <span className="icon_heart_alt"></span>
                     <div className="tip">2</div> 
                  </a>
                </li>
                */}
                <li>
                  <Link href={"/product/cartList"}>
                    <a href="#">
                      <span className="icon_bag_alt"></span>
                      <div className="tip">{prod.cartCount}</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export const getInitialProps = ({ store }) => {
  return { custom: "custom" }; // you can pass some custom props to component from here
};

export default Header;
