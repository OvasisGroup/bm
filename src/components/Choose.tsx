import React from 'react'

const ChooseList = [
    {
        id: 1,
        title: "Experience:",
        body: "in the industry, we have what it takes to build systems that will exceed your expectations. Our Staff are well trained by the OEM and boast of first hand experience in technical front."
    },
    {
        id: 2,
        title: "Products and Partners:",
        body: "With industry-leading products, which we choose for their durability and outstanding performance, you can be sure that your solar panel system will last for many decades. Thus, value-addition and peace of mind to focus on your core business."
    },
    {
        id: 3,
        title: "Expertise:",
        body: "We handle the full site analysis, system engineering, permitting, installation, activation, monitoring, and maintenance of your systems."
    }
]

export default function Choose() {
  return (
    <div className='bg-orange-50 py-6'>
    <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className='border-l-4 border-secondary pl-6'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>Choose Beyond Matrix</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70'>Why choose Beyond Matrix when there are so many companies vying for business?</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-3 justify-start items-start gap-12'>
                {ChooseList.map((service) => (
                    <div key={service.id} className=''>
                        <div className='border-l-1 border-secondary pl-6 md:h-45 border-b-1'>
                            <h3 className='font-bold text-xl md:mt-8 mt-4 text-primary md:mb-4'>{service.title}</h3>
                            <p className='font-light pb-4'>{service.body}</p>
                        </div>
                    </div>
                ))}
               
            </div>
            </div>
        </div>
        </div>
  )
}
