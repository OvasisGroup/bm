import React from 'react'

export default function AboutUs() {
  return (
    <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className='border-l-4 border-secondary pl-6'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>About Us</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70'>We build community value into every aspect of our operations while delivering professional expertise, exceptional customer service and quality results.</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-2 justify-start items-start gap-12'>
                <div>
                    <p>Our biggest asset at Beyond Matrix Ltd is a dedicated and highly skilled team who adopt a truly collaborative approach to their work. We understand the complexities required for the seamless integration of the many different aspects of our clients’ requirements thus ensuring the on- time and on-budget delivery of all clients’ projects.</p>
                    <p className='pt-4'>Through our integrated business structure, Beyond Matrix Ltd leverages on its various strengths to create value and provide a competitive advantage to our clients. We pride ourselves on being a supplier of choice through our reputation for quality and ability to create a long-standing relationship.</p>
                </div>
                <div>
                    <p>We build community value into every aspect of our operations while delivering professional expertise, exceptional customer service and quality results.
With the well-trained qualified staff with solid experience in the market and the backing of strategic Partnerships with the Original Equipment Manufacturer, at Beyond Matrix Ltd we bring
value to clients at the forefront of innovation and technology</p>
<p className='pt-4'>Through our integrated business structure, we leverage synergies within our organization to use economies of scale, create value and provide
a competitive advantage to all our clients and partners</p>
                </div>
            </div>
            </div>
        </div>
  )
}
