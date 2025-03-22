import Image from 'next/image'
import React from 'react'

export default function Introduction() {
    return (
        <div className='bg-primary md:px-0 px-6'>
            <Image src='/SVG/bar.svg' alt='logo' width={1000} height={100} className='w-full opacity-15' />
            <div className='container mx-auto py-10'>
                <div className='grid md:grid-cols-2 justify-center items-start gap-16'>
                    <div>
                    <Image src='/engineer.jpg' alt='logo' width={1000} height={100} className='w-full opacity-100 rounded-xl my-6' />
                    <h2 className='text-3xl font-light text-white mb-6'>Everything we do is built on a commitment to add value to our customers, our people, and our community guided by. <span className='font-bold text-secondary'>Our Mission, Vision, and Values.</span></h2>

                    </div>
                    <div>
                    <Image src='/4x/iconone.png' alt='logo' width={50} height={100} className='opacity-100 my-6' />
                    
                        <h2 className='text-2xl font-bold text-secondary'>
                            Our Mission
                        </h2>
                        <p className='text-white mb-4'>We deliver quality products and services at affordable cost to 100% customers satisfaction.</p>
                        <h2 className='text-2xl font-bold text-secondary'>Our Vision</h2>
                        <p className='text-white mb-4'>To inspire economic growth through innovative, creative and evolving solutions.</p>
                        <h2 className='text-2xl font-bold text-secondary'>Our Strength</h2>
                        <p className='text-white mb-4'>Our highly experienced and trained staff pay special attention to details we have a passion for what we do</p>

                        <div className='mt-6 border-t-1'>
                        <h2 className='text-2xl font-bold text-secondary pt-4'>Our Values</h2>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Integrity</p>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Passion</p>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Teamwork</p>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Innovation</p>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Excellence</p>
                        <p className='text-white py-2 border-b-1 border-gray-500'>Entrepreneurship</p>

                        </div>
                    </div>
                </div>
                <Image src='/SVG/bar.svg' alt='logo' width={1000} height={100} className='w-full opacity-15 mt-8' />
            </div>
        </div>
    )
}
