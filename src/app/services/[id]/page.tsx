"use client"
import React from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'

const ServicesList = [
    {
        id: 1,
        image: "/SVG/construction.svg",
        mainimage: "/constructionworks.jpg",
        title: "Construction & Civil Works",
        header: "We don’t just build structures; we forge lasting connections and leave a legacy of excellence in every community we serve. Join us as we continue to redefine the boundaries of possibility in construction and civil works.",
        bgimage: "We specialize in delivering a comprehensive range of construction and civil engineering solutions tailored to meet the diverse needs of our clients. From groundbreaking infrastructure projects to intricate building developments, our dedicated team of professionals brings expertise, creativity, and technical prowess to every endeavor. We pride ourselves on our ability to execute projects efficiently, on time, and within budget. Our unwavering dedication to excellence ensures that each project is approached with precision and attention to detail, resulting in superior outcomes that exceed expectations.",
        description: "As a company, we are committed to fostering collaborative partnerships, embracing innovation, and adopting sustainable practices that minimize environmental impact. By combining traditional craftsmanship with cutting-edge technologies, we strive to deliver forward-thinking solutions that shape the future of construction and civil engineering. At Beyond Matrix Limited, we don’t just build structures; we forge lasting connections and leave a legacy of excellence in every community we serve. Join us as we continue to redefine the boundaries of possibility in construction and civil works."
    },
    {
        id: 2,
        image: "/SVG/cabling.svg",
        mainimage: "/cabling-structured.jpg",
        title: "Structured Cabling and Electrical Works",
        header: "Beyond Matrix Ltd renovations and electrical works team have a solid experiences and partnership to handle any nature of renovations, electricals and structured cabling supplies and installations. We provide renovation and electrical supplies and works in all sectors; Commercial, Residential, Retail, Industrial, ICT, Energy, Industrial, FMCG, Water sectors, Health Care, telecoms, banking & Insurance, manufacturing and government departments, Non-government, Learning Institutions.",
        bgimage: "We specialize in delivering a comprehensive range of construction and civil engineering solutions tailored to meet the diverse needs of our clients. From groundbreaking infrastructure projects to intricate building developments, our dedicated team of professionals brings expertise, creativity, and technical prowess to every endeavor. We pride ourselves on our ability to execute projects efficiently, on time, and within budget. Our unwavering dedication to excellence ensures that each project is approached with precision and attention to detail, resulting in superior outcomes that exceed expectations.",
        description: "These solutions are centred around critical power, thermal management, data centre infrastructure, monitoring and management and maintenance services. Structure cabling installs done right! Beyond Matrix your provider for new build & office renovations. Our in-house cabling team designs & implements cabling solutions of every size. We design supply and install: Structured Cabling Solutions, New Build Structured Cabling and Upgrade of Existing Facilities"
    },
    {
        id: 3,
        image: "/SVG/ict.svg",
        mainimage: "/ict-infra.jpg",
        title: "ICT Infrastructure",
        header: "We don’t just build structures; we forge lasting connections and leave a legacy of excellence in every community we serve. Join us as we continue to redefine the boundaries of possibility in construction and civil works.",
        bgimage: "Beyond Matrix Ltd ICT Infrastructure Products & Services division focuses on providing solutions for mission critical environments in telecoms, banking & Insurance, manufacturing and government departments, Non-government, Learning Institutions. These solutions are centred around critical power, thermal management, data centre infrastructure, monitoring and management and maintenance services. Products and solutions are centred around critical power, thermal management, data centre infrastructure, monitoring and management and maintenance services: Design and Supply:",
        description: "High Precision Air Conditioning (HPAC), AC Power Management, DC Power Management (12VDC/ 48VDC / 110VDC / 400 VDC), Stabilizer (AVA), Uninterruptible Power Supply(UPS), Transcient Voltage Surge Suppressor (TVSS), Integrated Racks, Integrated Data Centre Solutions, Data Centre and Cabling Landing Stations, Generators, Wireless Networks, Site Surveys, Build and service critical infrastructure for Data, Centres and IT Communication room Fire and Security Systems Integrator"
    },
    {
        id: 4,
        image: "/SVG/energy.svg",
        mainimage: "/solar.jpg",
        title: "Renewable Energy",
        header: "Your switch to renewable energy will increase profitability and bolster your business’s public perception. It’s a true win-win",
        bgimage: "We design, supply and install solar systems and all the related accessories. The Answer for Your Business! If you’re searching for commercial solar companies, you can trust Beyond Matrix for all your business’s energy needs. We’re able to provide clean, sustainable power through our reliable solar systems.",
        description: "Switching to solar for your business results in two major benefits. First, you’ll see the financial benefit on your monthly bank statement, thanks to saving thousands each year on energy costs alone. Additionally, going solar makes a positive public statement that you’re a responsible corporation who cares for the environment. Your switch to renewable energy will increase profitability and bolster your business’s public perception. It’s a true win-win"
    },
    {
        id: 5,
        image: "/SVG/leasing.svg",
        mainimage: "/leasing.jpg",
        title: "Trade Sales Asset Management and Leasing Of Equipment",
        header: "We have partners with various finance houses and leasing organizations to provide Civil, Mechanical, Electrical and ICT infrastructure equipment’s under lease arrangement.",
        bgimage: "We supply diverse range of products in the Electrical and Mechanical engineering field including the related accessories and safety gears",
        description: "We have partners with various finance houses and leasing organizations to provide Mechanical, Electrical and ICT infrastructure equipment’s under lease arrangement. This can be arranged on request."
    }
]

export default function ServiceDetail() {
    const params = useParams()
    const id = params?.id

    const service = ServicesList.find((service) => service.id === parseInt(id as string))

    if (!service) {
        return <p>Service not found</p>
    }

    return (
        <div className="container mx-auto py-10">
            <Image src='/SVG/bar.svg' alt='logo' width={1200} height={100} className='w-full opacity-15 mt-15' />
            <Image src={service.mainimage} width={1000} height={100} alt={service.title} className='w-full md:rounded-b-3xl mb-6' />
            <div className='flex justify-center items-center w-full -mt-10'><Link href={'/services'}><Button className='rounded-4xl'><ArrowBigLeft/> Go Back</Button></Link></div>
            <div className="flex flex-col items-start px-6 md:px-0">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-4xl font-bold text-primary mt-6">{service.title}</h1>
                    <Image src={service.image} width={150} height={120} alt={service.title} className='hidden md:block' />
                </div>
                <div className='border-l-4 border-secondary pl-6 mt-6'>
                    <p className='font-thin md:text-3xl text-2xl mt-4 text-black opacity-70'>{service.header}</p>
                </div>
                <div className='grid md:grid-cols-2 gap-12 mt-10 items-start'>
                    <p>{service.bgimage}</p>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    )
}