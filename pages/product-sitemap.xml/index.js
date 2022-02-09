
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps  = async (cts) => { 
    let url = `${process.env.PRODUCT_API}${"api/v1/allProducts"}`;    
    const response = await fetch(url);
    const list  = await response.json();
    const fields = list.map((row) =>({
        loc: `http://lyra-buy.com/product/${row.id}`,
        lastmod: new Date().toISOString(),
    }));
    return getServerSideSitemap(cts , fields);
};

export default function Site() {}



