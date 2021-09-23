import ComponentsFilter from '../components/ComponentsFilter'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='px-4 py-6 sm:px-0'>
        Homepage: <br />
        is reusable - done
        <br />
        <Link href='/frameworks/bootstrap'>
          <a>Go to pages/frameworks/[slug].js</a>
        </Link>
        <br />
        <Link href='/types/free'>
          <a>Go to pages/types/[slug].js</a>
        </Link>
        <br />
        <Link href='/sections/footer'>
          <a>Go to pages/sections/[slug].js</a>
        </Link>
        <hr />
        <div className='bg-white p-8 my-8'>
          <ComponentsFilter addonFilter='&framework.slug=bootstrap' />
        </div>
      </div>
    </div>
  )
}
