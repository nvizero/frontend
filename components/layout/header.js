import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { connect, useDispatch, useStore, useSelector } from "react-redux";
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

function Header() {
  const { data: sesion } = useSession();
  const is_login = useSelector((state) => state.is_login);
  const user_token = useSelector((state) => state.user_token);
  const headers = new Headers({
    _token: user_token,
  });
  const handleLogout = () => {
    (async () => {
      try {
        const rawResponse = await fetch("/api/v1/logout", {
          method: "POST",
          body: "",
          headers: {
            "content-type": "application/json",
            authorization: `${user_token}`,
          },
        });
        const content = await rawResponse.json();
      } catch (e) {
        console.log(e);
      }
    })();
  };
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
    // {
    //   key: 4,
    //   title: "分類",
    //   link: "/category",
    //   active: "/category",
    //   subMenus: [
    //     {
    //       key: 1,
    //       title: "Product Details",
    //       link: "/shop",
    //       active: "/shop",
    //     },
    //     {
    //       key: 2,
    //       title: "Shop Cart",
    //       link: "/shop",
    //       active: "/shop",
    //     },
    //     {
    //       key: 3,
    //       title: " 12",
    //       link: "/shop",
    //       active: "/shop",
    //     },
    //   ],
    // },
  ];

  const router = useRouter();

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
                {sesion  ? (
                  <Link href={"/api/auth/signout"}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signOut('github');
                      }}
                    >
                      登出{" "}
                    </a>
                  </Link>
                ) : (
                  <>
                    <Link href={"/api/auth/signin"}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          signIn();
                        }}
                      >
                        登入
                      </a>
                    </Link>

                    {/* <Link href={"/api/auth/signout"}>
                      <a href="#">登出</a>
                    </Link> */}
                  </>
                )}
              </div>
              <ul className="header__right__widget">
                <li>
                  <span className="icon_search search-switch"></span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon_heart_alt"></span>
                    <div className="tip">2</div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon_bag_alt"></span>
                    <div className="tip">2</div>
                  </a>
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

//export default connect(state => state)(Header);
// export default Header;
export default connect()(Header);
