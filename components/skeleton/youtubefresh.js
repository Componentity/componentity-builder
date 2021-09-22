import React from 'react'
import ContentLoader from 'react-content-loader'

const YoutubeFresh = (props) => (
  <ContentLoader viewBox='0 0 100 100' className='w-full' {...props}>
    <rect className='rounded-md' x='0' y='0' rx='0' ry='0' width='100%' height='80%' />
    <rect x='0' y='86%' rx='0' ry='0' width='100%' height='6%' />
    <rect x='0' y='94%' rx='0' ry='0' width='70%' height='6%' />
  </ContentLoader>
)

YoutubeFresh.metadata = {
  name: 'Costal Oktopus',
  github: 'coktopus', // Github username
  description: 'Youtube fresh',
  filename: 'YoutubeFresh' // filename of your loader
}

export default YoutubeFresh
