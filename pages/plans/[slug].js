import ComponentsFilter from '../../components/ComponentsFilter'
import { NextSeo } from 'next-seo'

const plans = ({ seo, slug }) => {
  return (
    <>
      <NextSeo
        title={seo.metaTitle}
        description={seo.metaDescription}
        canonical={`https://www.componentity.com/plans/${slug}`}
        noindex={seo.preventIndex}
        openGraph={{
          url: `https://www.componentity.com/plans/${slug}`,
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
          plans Filter: {slug}
          <hr />
          <div className='bg-white p-8 my-8'>
            {slug != undefined && <ComponentsFilter addonFilter={`&plan.slug=${slug}`} />}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await fetch(`https://peaceful-ridge-63546.herokuapp.com/plans?slug=${slug}`)
  const plans = await res.json()

  if (plans.length <= 0) {
    return {
      notFound: true
    }
  }

  const seo = plans[0].SEO

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
  const res = await fetch('https://peaceful-ridge-63546.herokuapp.com/plans')
  const plans = await res.json()

  const paths = plans.map((plan) => ({
    params: { slug: plan.slug }
  }))

  return { paths, fallback: 'blocking' }
}

export default plans
