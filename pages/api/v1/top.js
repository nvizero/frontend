// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let topMain = [
    {
      key: 1,
      title: "Women’s fashion",
      content:
        "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida",
      link: "",
      img: "/img/categories/category-1.jpg",
    },
  ];
  let topSub = [
    {
      key: 1,
      title: "Women’s fashion",
      content: "358 items",
      link: "",
      img: "/img/categories/category-2.jpg",
    },
    {
      key: 2,
      title: "Men’s fashion",
      content: "358 items",
      link: "",
      img: "/img/categories/category-3.jpg",
    },
    {
      key: 3,
      title: "Accessories",
      content: "159 items",
      link: "",
      img: "/img/categories/category-4.jpg",
    },
    {
      key: 4,
      title: "Cosmetics",
      content: "792 items",
      link: "",
      img: "/img/categories/category-5.jpg",
    },
  ];
  const topData = { main: topMain, sub: topSub };
  res.statusCode = 200;
  res.json(topData);
};
