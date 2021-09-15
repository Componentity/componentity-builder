module.exports = {
  siteUrl: 'https://www.componentity.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.componentity.com/server-sitemap.xml' // <==== Add here
    ]
  }
}
