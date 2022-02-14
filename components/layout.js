import Header from "./layout/header";
import Footer from "./layout/footer";
import Ig from "./layout/ig";
import Head from "next/head";
import Script from "next/script";
const Layout = (props) => {  
  const { children, title, loading, descript, img, canonicalUrl } = props;
  return (
    <>
      <Head>
        <title>{title ? title + " " : ""}Lyra Buy 美國代購</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={descript ? descript : "用最少的價額,買到CP值最高的精品" } />
        <meta property="og:description" content={descript}></meta>
        <meta
          property="og:title"
          content={title ? title + " Lyra Buy 美國代購" : "Lyra Buy 美國代購"}
        ></meta>
        <meta property="og:type" content="LyraBuy 美國代購"></meta>
        <meta property="og:image" content={img} />
        <meta name="keywords" content="Lyra,Buy,美國代購,Lyra Buy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-71M8ZRTSJR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-71M8ZRTSJR');
        `}
        </Script>
        <link rel="alternate" href={canonicalUrl} />
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
