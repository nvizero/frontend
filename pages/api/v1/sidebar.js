// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let sidebar = [
    {
      title: "Womens",
      classOutSide: "card-heading active",
      classInSide: "collapse show",
      sub: [
        { title: "BBB", link: "" },
        { title: "CCC", link: "" },
        { title: "aa", link: "" },
      ],
    },
    {
      title: "Man",
      classOutSide: "card-heading",
      classInSide: "collapse",
      sub: [
        { title: "BB", link: "" },
        { title: "cc", link: "" },
      ],
    },
    {
      title: "Kids",
      classOutSide: "card-heading",
      classInSide: "collapse",
      sub: [
        { title: "dd", link: "" },
        { title: "aeeffa", link: "" },
      ],
    },
  ];
  res.statusCode = 200;
  res.json(sidebar);
};
