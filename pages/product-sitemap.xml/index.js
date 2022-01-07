
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps  = async (cts) => { 
    let url = `${process.env.PRODUCT_API}${"api/v1/productList"}`;
    console.log(url);
    const response = await fetch(url);
    const list  = await response.json();

    const fields = list.map((row) =>({
        loc: `${process.env.PRODUCT_API}/product/${row.id}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(cts , fields);
};

export default function Site() {}



