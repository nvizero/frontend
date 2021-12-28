// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let categories = [
    {
      key: 1,
      title: "所有",
    },
    {
      key: 2,
      title: "女裝",
    },
    {
      key: 3,
      title: "男裝",
    },
    {
      key: 4,
      title: "兒童",
    },
    {
      key: 5,
      title: "鞋",
    },
    {
      key: 6,
      title: "生活",
    },
  ];
  res.statusCode = 200;
  res.json(categories);
};
