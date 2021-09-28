import { useQuery } from 'react-query'
import Link from 'next/link'
import CheckboxList from './skeleton/checkboxlist'

export default function Footer() {
  const fetchFooter = () =>
    fetch('https://peaceful-ridge-63546.herokuapp.com/footer').then((res) => res.json())

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    'footer',
    () => fetchFooter(),
    {
      keepPreviousData: true
    }
  )
  if (isLoading) {
    return (
      <div className='bg-gray-100 pt-4'>
        <div className='max-w-screen-xl px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 gap-8 mx-auto'>
          <CheckboxList />
          <div className='flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
          </div>
          <div className='flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
          </div>
          <div className='flex flex-col gap-y-2'>
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
            <CheckboxList />
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='block flex items-center justify-center bg-gray-700 text-red-600 font-semibold'>
        Error: {error.message}
      </div>
    )
  }

  console.log('DATA: ', data)

  return (
    <div key={data.id} className='bg-gray-100 pt-5'>
      <div className='max-w-screen-xl px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
        <div className='p-5'>
          <Link href={data.Link.href ? data.Link.href : '#'}>
            <a className=' text-indigo-600 hover:text-indigo-500'>
              <h3 className='font-bold text-xl'>{data.Link.title}</h3>
            </a>
          </Link>
        </div>
        {data.sections.map((section) => (
          <div key={section.id} className='p-5'>
            <div className='text-sm uppercase text-indigo-600 font-bold'>{section.title}</div>
            {section.link.map((linkitem) => (
              <Link key={linkitem.id} href={linkitem.href ? linkitem.href : '#'}>
                <a className='my-3 block'>{linkitem.title}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
