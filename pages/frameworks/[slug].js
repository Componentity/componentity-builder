import ComponentsFilter from '../../components/ComponentsFilter'
import { NextSeo } from 'next-seo'

const Frameworks = ({ seo, slug }) => {
  return (
    <>
      <NextSeo
        title={seo.metaTitle}
        description={seo.metaDescription}
        canonical={`https://www.componentity.com/frameworks/${slug}`}
        noindex={seo.preventIndex}
        openGraph={{
          url: `https://www.componentity.com/frameworks/${slug}`,
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
          Framework Filter: {slug}
          {console.log('SLUG NOW: ', slug)}
          <hr />
          <div className='bg-white p-8 my-8'>
            {slug != undefined && <ComponentsFilter addonFilter={`&framework.slug=${slug}`} />}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await fetch(`https://peaceful-ridge-63546.herokuapp.com/frameworks?slug=${slug}`)
  const frameworks = await res.json()

  console.log('----------------------------')
  console.log('FRAMEWORKS IN POROPS: ', frameworks)
  console.log('----------------------------')

  if (frameworks.length <= 0) {
    return {
      notFound: true
    }
  }

  const seo = frameworks[0].SEO

  if (!seo) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      seo,
      slug
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://peaceful-ridge-63546.herokuapp.com/frameworks')
  const frameworks = await res.json()

  const paths = frameworks.map((framework) => ({
    params: { slug: framework.slug }
  }))

  return { paths, fallback: 'blocking' }
}

export default Frameworks
