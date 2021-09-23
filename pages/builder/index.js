import AddSection from './../../components/AddSection'
import { useRouter } from 'next/router'

export default function Builder() {
  const { asPath } = useRouter()

  console.log('ROUTER: ', asPath)
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='px-4 py-6 sm:px-0 min-h-96'>
        <div className='DROPPED'></div>
        <AddSection />
      </div>
    </div>
  )
}
