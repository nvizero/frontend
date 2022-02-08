import Collect from '@/lib/api/Collect';

export default async function useSidebar(req, res) {  
  try {    
    const json = await new Collect([],"/menus").getAll();    
    return res.json(json.data);    
  } catch(e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}

// export default (req, res) => {
//   let sidebar = [
//     {
//       title: "Womens",
//       classOutSide: "card-heading active",
//       classInSide: "collapse show",
//       sub: [
//         { title: "BBB", link: "" },
//         { title: "CCC", link: "" },
//         { title: "aa", link: "" },
//       ],
//     },
//     {
//       title: "Man",
//       classOutSide: "card-heading",
//       classInSide: "collapse",
//       sub: [
//         { title: "BB", link: "" },
//         { title: "cc", link: "" },
//       ],
//     },
//     {
//       title: "Kids",
//       classOutSide: "card-heading",
//       classInSide: "collapse",
//       sub: [
//         { title: "dd", link: "" },
//         { title: "aeeffa", link: "" },
//       ],
//     },
//   ];
//   res.statusCode = 200;
//   res.json(sidebar);
// };
