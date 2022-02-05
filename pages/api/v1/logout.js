import Collect from '@/lib/api/Collect';
export default async function logout(req, res) {  
  try {    
    const json = await new Collect(req.headers.authorization,"/logout").logout();        
    return res.json(json.data);
  } catch(e) {
    return res.status(e.status || 200).json(e.response);
  }
}

 
