import Collect from '@/lib/api/Collect';

export default async function productList(req, res) {
  
  try {    
    const json = await new Collect([],"/productList").getAll();
    return res.json(json.data);
    
  } catch(e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
