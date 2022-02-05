// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Collect from '@/lib/api/Collect';

export default async function shop(req, res, params) {    
    try {
      const json = await new Collect([],`/productList?page=${req.query.page}`).getAll();
      return res.json(json.data);      
    } catch(e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  };
  