import Choose from '@/components/Choose'
import Image from 'next/image'
import React from 'react'

const Logos = [
    {
        id: 1,
        image: "/partners/cisco.jpg",
    },
    {
        id: 2,
        image: "/partners/apc.jpg",
    },
    {
        id: 3,
        image: "/partners/schneider.jpg",
    },
    {
        id: 4,
        image: "/partners/mecer.jpg",
    },
    {
        id: 5,
        image: "/partners/giganet.jpg",
    },
    {
        id: 6,
        image: "/partners/siemon.jpg",
    },
    {
        id: 7,
        image: "/partners/arista.jpg",
    },
    {
        id: 8,
        image: "/partners/ortea.jpg",
    },
    {
        id: 9,
        image: "/partners/vertiv.jpg",
    },
    {
        id: 10,
        image: "/partners/ritar.jpg",
    },
    {
        id: 11,
        image: "/partners/csb.jpg",
    },
    {
        id: 12,
        image: "/partners/gaston.jpg",
    },
    {
        id: 11,
        image: "/partners/asco.jpg",
    },
    {
        id: 11,
        image: "/partners/must.jpg",
    },
    {
        id: 11,
        image: "/partners/jinko.jpg",
    }
]

export default function Partners() {
    return (
        <div>
            <Image src={'/services.jpg'} alt='logo' width={1000} height={100} className='w-full opacity-100 mt-20' />
        <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className='border-l-4 border-secondary pl-6'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>Partners</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70'>We have partnerd with various organizations to provide Mechanical, Electrical, Civil and ICT infrastructure equipments, accessories and other Consumable Items.</p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mt-10'>
            {Logos.map((service) => (
                    <div className='' key={service.id}>
                        <div className='border-l-1 border-secondary border-b-1'>
                            <Image src={service.image} width={200} height={200} alt="construction" className=''/>
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
        <Choose />
        </div>
    )
}
