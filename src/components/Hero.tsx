"use client"
import React from 'react'
import { Button } from './ui/button'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className='w-screen h-screen lg:bg-[url("/hero-image.jpg")] bg-cover bg-center bg-amber-300'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 justify-center items-center h-full'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
                <h1 className=' font-light text-primary md:text-5xl'>Specialised solutions in Construction, Engineering & ICT infrastructure</h1>
                <p className='text-xl font-light mt-6'>At Beyond Matrix Ltd, innovation and professionalism underpin our business, there is no project too small, large or complex for us to execute.</p>
                <Button className='mt-4 bg-secondary text-primary hover:bg-primary hover:text-secondary p-6 font-bold'>Read More</Button>
            </motion.div>
            <div></div>
        </div>
    </div>
  )
}
