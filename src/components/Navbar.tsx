'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { AlignJustify, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change background when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-4 transition-all duration-300 ${
        scrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          <Image src='/4x/bm-logo.png' alt='logo' width={120} height={100} className='width={100}' />
        </Link>
        <div className="hidden md:flex space-x-6 justify-between items-center bg-white p-4 border-r-8 border-secondary">
          <Link href="/" className="text-primary">
            Home
          </Link>
          <Link href="/about" className="text-primary">
            About
          </Link>
          <Link href="/services" className="text-primary">
            Services
          </Link>
          <Link href="/contacts" className="text-primary">
            Contacts
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify/>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link href="/" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Home <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/about" className=" block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            About <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/services" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Services <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/contacts" className="block flex flex-row justify-between text-gray-900 hover:text-amber-400 font-bold mb-4 border-b-1 py-2">
            Contacts <ArrowUpRight className='text-amber-400'/>
          </Link>
          <Link href="/dashboard" className="block flex flex-row justify-between text-gray-700 hover:text-blue-500">
          <Button className='w-full border-2 border-amber-400 bg-teal-800 hover:bg-white text-black cursor-pointer p-6 font-bold'>Get Started <ArrowUpRight/></Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;