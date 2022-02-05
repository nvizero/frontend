import Collect from '@/lib/api/Collect';

export default async function login(req, res) {  
  try {
    const json = await new Collect([],"/login").login(req.body);    
    return res.json(json.data);    
  } catch(e) {
    return res.status(e.status || 200).json(e.response.data);
  }
}
