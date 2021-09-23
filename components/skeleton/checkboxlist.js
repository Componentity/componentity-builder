import React from 'react'
import ContentLoader from 'react-content-loader'

const CheckboxList = (props) => (
  <ContentLoader viewBox='0 0 100 10' className='w-full' {...props}>
    <rect className='rounded-md' x='0' y='0' rx='0' ry='0' width='10%' height='100%' />
    <rect className='rounded-md' x='14%' y='0' rx='0' ry='0' width='86%' height='100%' />
  </ContentLoader>
)

CheckboxList.metadata = {
  name: 'Manuela Garcia',
  github: 'ManuelaGar',
  description: 'This is a checkbox list loader.',
  filename: 'CheckboxList'
}

export default CheckboxList
