// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Collect from '@/lib/api/Collect';

export default async function shop(req, res) {
    let shops = [
      {
        key: 1,
        img: "/img/shop/shop-1.jpg",
        name: "【MUJI 無印良品】女氂牛毛混直角襪_摩卡棕紋樣(23~25cm工",
        category: "女裝,所有",
        price:200,
        tag: { type: "new", name: "New" },
        class: "col-lg-4 col-md-6"
      }      
    ];
    //res.statusCode = 200;
    //res.json(shops);
    try {    
      const json = await new Collect([],"/productList").getAll();
      return res.json(json.data);
      
    } catch(e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  };
  