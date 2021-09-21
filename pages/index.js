import ComponentsFilter from '../components/ComponentsFilter'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='px-4 py-6 sm:px-0'>
        Homepage: Checking if ComponentsFilter is reusable
        <hr />
        <div className='bg-white p-8 my-8'>
          <ComponentsFilter />
        </div>
      </div>
    </div>
  )
}
