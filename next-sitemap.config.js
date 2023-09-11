const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://www.releasyapp.io';
module.exports = {
  siteUrl,
  exclude: ['/404', '/not-found', '/not-found-cover'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      { userAgent: '*', allow: '/' },
    ],
    //additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
};
