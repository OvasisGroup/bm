import Choose from '@/components/Choose'
import Services from '@/components/Services'
import Image from 'next/image'
import React from 'react'

export default function Service() {
  return (
    <div>
        <Image src={'/services.jpg'} alt='logo' width={1000} height={100} className='w-full opacity-100 mt-20' />
        <Services/>
        <Choose/>
    </div>
  )
}
