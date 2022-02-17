// import { useState, useEffect } from "react";
//import { Button, Modal } from "react-bootstrap";
//import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient()

// const Mix = ({ dbdata }) => {
const Mix = () => {
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
  return (
    <>
      {process.env.NEXTAUTH_SECRET}<br/>
      {process.env.NEXTAUTH_URL}<br/>
      {process.env.GITHUB_ID}<br/>
      {process.env.GITHUB_SECRET}<br/>
      {process.env.FACEBOOK_CLIENT_ID}<br/>
      {process.env.FACEBOOK_CLIENT_SECRET}<br/>
      {process.env.GOOGLE_ID}<br/>
      {process.env.GOOGLE_SECRET}<br/>
    </>
  );
};

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const menu = await prisma.admin_menu.findMany();
//   let dbdata = JSON.stringify(menu);

//   return {
//     props: { dbdata },
//   };
// }
export default Mix;
