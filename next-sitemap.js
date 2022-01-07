const siteUrl = "http://lyra-buy.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
        `${siteUrl}/sitemap.xml`,
        `${siteUrl}/product-sitemap.xml`
    ],
  },
};
