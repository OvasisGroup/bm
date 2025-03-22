"use client"
import React from 'react'
import { Button } from './ui/button'
import { motion } from "framer-motion"
import { DownloadCloudIcon } from 'lucide-react'

export default function Hero() {
  return (
    <div className='w-screen lg:h-screen py-40 lg:bg-[url("/hero-image.jpg")] bg-cover bg-right bg-white' >
        <div className='container mx-auto grid md:grid-cols-2 justify-center items-center h-full'>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
                <h1 className='text-secondary font-light md:text-primary md:text-5xl text-center md:text-left text-4xl px-6 md:px-0'>Specialised solutions in Construction, Engineering & ICT infrastructure</h1>
                <p className='md:text-xl font-light mt-6 md:text-black px-6 md:px-0 text-center md:text-left'>At Beyond Matrix Ltd, innovation and professionalism underpin our business, there is no project too small, large or complex for us to execute.</p>
                <div className='flex justify-center items-center md:items-start md:justify-start'><Button className='mt-4 bg-secondary text-primary hover:bg-primary hover:text-secondary p-6 font-bold'><DownloadCloudIcon/> Download Company Profile</Button></div>
            </motion.div>
            <div></div>
        </div>
    </div>
  )
}
