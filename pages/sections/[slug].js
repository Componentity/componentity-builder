import ComponentsFilter from '../../components/ComponentsFilter'
import { useRouter } from 'next/router'
import react, { useState, useEffect } from 'react'
const Sections = () => {
  const router = useRouter()
  const { slug } = router.query
  const [slugnow, setSlugnow] = useState(router.query.slug)

  useEffect(() => {
    setSlugnow(slug)
  }, [slug])

  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='px-4 py-6 sm:px-0'>
        Section Filter: {slugnow}
        {console.log('SLUG NOW: ', slugnow)}
        <hr />
        <div className='bg-white p-8 my-8'>
          {slugnow != undefined && <ComponentsFilter addonFilter={`&section.slug=${slugnow}`} />}
        </div>
      </div>
    </div>
  )
}
export default Sections
