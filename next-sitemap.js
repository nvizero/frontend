const siteUrl = "http://lyra-com";

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
