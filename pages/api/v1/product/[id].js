import Collect from '@/lib/api/Collect';

export default async function handleProduct(req, res) {
  if (req.method === 'GET') {
    const json = await new Collect([],'/product').getById(req.query.id);    
    return res.json(json.data);
  }   
}
