// import { useState, useEffect } from "react";
//import { Button, Modal } from "react-bootstrap";
//import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient()

// const Mix = ({ dbdata }) => {
//   let showdata = "",hhh = "";
//   showdata = JSON.parse(dbdata);
//   const [fin, setFin] = useState(false);  
//     hhh = showdata.map((item,key) => {
      
//       return (
//         <div key={key}>
//           <h1>{item.title}</h1>
//         </div>
//       );
//     });
//   useEffect(() => {        
//     setFin(true);
//   }, []);
//   return (
//     <>
      
//        [{fin === true ? hhh : ''}] 
       
      
//     </>
//   );
// };

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const menu = await prisma.admin_menu.findMany();
//   let dbdata = JSON.stringify(menu);

//   return {
//     props: { dbdata },
//   };
// }
// export default Mix;
