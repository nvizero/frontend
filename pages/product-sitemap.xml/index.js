
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps  = async (cts) => { 
    let url = `http://lyra-buy.com/${"api/v1/productList"}`;    
    const response = await fetch(url);
    const list  = await response.json();

    const fields = list.map((row) =>({
        loc: `http://lyra-buy.com/product/${row.id}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(cts , fields);
};

export default function Site() {}



