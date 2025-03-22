import AboutUs from '@/components/About'
import Choose from '@/components/Choose'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
        <Image src={'/aboutpageus.jpg'} alt='logo' width={1000} height={100} className='w-full opacity-100 mt-20' />
    <AboutUs/>
    <Choose/>
    </div>
  )
}
