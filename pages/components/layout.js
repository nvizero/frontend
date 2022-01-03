import Header from "./layout/header";
import Footer from "./layout/footer";
import Ig from "./layout/ig";
import Head from "next/head";
 
const Layout = (props) => {
  const { children, title, loading ,descript ,img } = props;
  
  return (
    <>
      <Head>
        <title>{title ? title + " ": ""}LyraBuy 美國代購</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />        
        <meta name="description" content={descript} />
        <meta property="og:description" content={descript}></meta>
        <meta property="og:title" content={title ? title + " LyraBuy 美國代購": "LyraBuy 美國代購"}></meta>
        <meta property="og:type" content="LyraBuy 美國代購"></meta>
        <meta property="og:image" content={img}/>
        <meta name="keywords" content="Lyra,Buy,美國代購,LyraBuy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />                
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
