import ComponentsFilter from '../components/ComponentsFilter'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default function Home({ seo }) {
  return (
    <>
      <NextSeo
        title={seo.metaTitle}
        description={seo.metaDescription}
        canonical='https://www.componentity.com/'
        noindex={seo.preventIndex}
        openGraph={{
          url: 'https://www.componentity.com',
          title: seo.metaTitle,
          description: seo.metaDescription,
          images: [
            {
              url: seo.shareImage.media.url,
              width: seo.shareImage.media.width,
              height: seo.shareImage.media.height,
              alt: seo.shareImage.alt,
              type: seo.shareImage.media.mime
            },
            {
              url: seo.shareImage.media.formats.large.url,
              width: seo.shareImage.media.formats.large.width,
              height: seo.shareImage.media.formats.large.height,
              alt: seo.shareImage.alt,
              type: seo.shareImage.media.formats.large.mime
            }
          ],
          site_name: 'Componentity'
        }}
        twitter={{
          handle: '@componentity',
          site: '@componentity',
          cardType: 'summary_large_image'
        }}
      />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          Homepage: <br />
          is reusable - done
          <br />
          <Link href='/frameworks/bootstrap'>
            <a>Go to pages/frameworks/[slug].js</a>
          </Link>
          <br />
          <Link href='/plans/free'>
            <a>Go to pages/plans/[slug].js</a>
          </Link>
          <br />
          <Link href='/categories/footer'>
            <a>Go to pages/categories/[slug].js</a>
          </Link>
          <hr />
          <div className='bg-white p-8 my-8'>
            <ComponentsFilter addonFilter='&framework.slug=bootstrap' />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const homepageRes = await fetch('https://peaceful-ridge-63546.herokuapp.com/pages?title=homepage')
  const homepage = await homepageRes.json()

  const seo = homepage[0].SEO

  return {
    props: {
      seo
    }
    // revalidate: 1
  }
}
