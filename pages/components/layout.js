import Header from "./layout/header";
import Footer from "./layout/footer";
import Ig from "./layout/ig";
import Head from "next/head";
 
const Layout = (props) => {
  const { children, title, loading } = props;
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />        
        <meta name="description" content="Ashion Template" />
        <meta name="keywords" content="Ashion, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        
        <title>LaLaBuy 美國代購 {title ? "|" + title : ""}</title>
      </Head>

      <>
        <Header />
        {loading ? (
          <div id="preloder">
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}

        <Ig />
        <Footer />
      </>
    </>
  );
};
export default Layout;
