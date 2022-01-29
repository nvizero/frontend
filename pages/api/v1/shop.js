// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Collect from '@/lib/api/Collect';

export default async function shop(req, res) {    
    try {    
      const json = await new Collect([],"/productList").getAll();
      return res.json(json.data);
      
    } catch(e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  };
  