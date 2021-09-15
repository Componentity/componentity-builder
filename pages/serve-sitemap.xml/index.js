import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields = [
    {
      loc: 'https://www.componentity.com', // Absolute url
      lastmod: new Date().toISOString()
      // changefreq
      // priority
    },
    {
      loc: 'https://www.componentity.com/builder', // Absolute url
      lastmod: new Date().toISOString()
      // changefreq
      // priority
    }
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
