import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

const ServicesList = [
    {
        id: 1,
        image: "/SVG/construction.svg",
        title: "Construction & Civil Works",
        bgimage: "construction-works.jpg"
    },
    {
        id: 2,
        image: "/SVG/construction.svg",
        title: "Structured Cabling and Electrical Works",
        bgimage: "construction-works.jpg"
    },
    {
        id: 3,
        image: "/SVG/construction.svg",
        title: "ICT Infrastructure",
        bgimage: "construction-works.jpg"
    },
    {
        id: 4,
        image: "/SVG/construction.svg",
        title: "Renewable Energy",
        bgimage: "construction-works.jpg"
    },
    {
        id: 5,
        image: "/SVG/construction.svg",
        title: "Trade Sales Asset Management and Leasing Of Equipment",
        bgimage: "construction-works.jpg"
    }
]

export default function Services() {
  return (
    <div className='container mx-auto py-10'>
        <div className=''>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>Products & Services Offering</h1>
        <p className='font-light text-3xl mt-4 text-black opacity-40'>Beyond Matrix Ltd is a highly diversified and integrated company providing specialised solutions in: Construction, Engineering & ICT infrastructure</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-3 justify-start items-start gap-6'>
                {ServicesList.map((service) => (
                    <Card key={service.id} className='h-55 shadow-none'>
                        <CardContent className=''>
                            <Image src={service.image} width={100} height={60} alt="construction"/>
                            <h3 className='font-bold text-xl mt-8'>{service.title}</h3>
                        </CardContent>
                    </Card>
                ))}
                <Card className='h-55 shadow-none'>dsfdfs</Card>
            </div>
            </div>
        </div>
  )
}
