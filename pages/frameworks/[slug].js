import ComponentsFilter from '../../components/ComponentsFilter'
import { useRouter } from 'next/router'

const Frameworks = () => {
  const router = useRouter()
  const { slug } = router.query
  console.log('SLUG: ', slug)
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='px-4 py-6 sm:px-0'>
        Framework Filter: {slug}
        <hr />
        <div className='bg-white p-8 my-8'>
          <ComponentsFilter addonFilter={`&framework.slug=${slug}`} />
        </div>
      </div>
    </div>
  )
}
export default Frameworks
