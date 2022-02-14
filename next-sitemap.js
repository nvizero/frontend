const siteUrl = "http://lyra-buy.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:[
      { userAgent: "",disallow: "/secret"},
      { userAgent: "",allow: "/"},
    ],
    additionalSitemaps: [
        `${siteUrl}/sitemap.xml`,
        `${siteUrl}/product-sitemap.xml`
    ],
  },
};
