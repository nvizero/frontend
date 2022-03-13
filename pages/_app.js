import "@/public/css/main.css";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import {store, wrapper} from '@/store'
import * as gtag from "@/lib/gtag";

// const store = createStore(reducer);
 
const WrappedApp = ({ Component, pageProps:{...pageProps}   }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (    
      <>        
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
      </>
    
  );
};


//export default withRedux(makeStore)(WrappedApp);
// export default WrappedApp;
export default wrapper.withRedux(WrappedApp)
//export default App;
