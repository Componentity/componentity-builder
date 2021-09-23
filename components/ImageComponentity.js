import React from 'react'
import Image from 'next/image'

export default function ImageComponentity({ src, alt = 'image', classes = 'h-44 w-full' }) {
  return (
    <div className={`relative ${classes}`}>
      <Image layout='fill' objectFit='cover' priority='true' src={src} alt={alt} />
    </div>
  )
}
