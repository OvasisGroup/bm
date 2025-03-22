import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primary py-10 px-6'>
        <div className='container mx-auto py-10 md:px-0 px-6'>
            <div className='w-full flex flex-col items-center justify-center'>
            <Image src='/SVG/bm-logo-two.svg' alt='logo' width={150} height={100} className='opacity-100' />
            <p className='text-white pt-6 font-light max-w-220 text-center'>Our biggest asset at Beyond Matrix Ltd is a dedicated and highly skilled team who adopt a truly collaborative approach to their work. We understand the complexities required for the seamless integration of the many different aspects of our clients’ requirements thus ensuring the on- time and on-budget delivery of all clients’ projects.
            </p>
            <h3 className='text-secondary font-bold text-2xl text-center pt-6'>Contact Us</h3>
            <p className='text-white pt-2 text-center'>The Nextgen Mall, Mombasa Road</p>
            <p className='text-white pt-2 text-center'>P.O Box 34752 – 00100, Nairobi, Kenya</p>
            <p className='text-white pt-2 text-center font-bold pb-6'>+254 757 436 250</p>
             <Image src='/SVG/bar.svg' alt='logo' width={1000} height={100} className='w-full opacity-15' />
            </div>
        </div>
    </div>
  )
}
