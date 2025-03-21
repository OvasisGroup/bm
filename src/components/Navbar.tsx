'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
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
          <Link href="/partners" className="text-primary">
            Partners
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
        <div className="md:hidden bg-white my-10 flex flex-col space-y-4 border-b-4 border-secondary">
           <Link href="/" className="text-primary border-b-1 pb-2">
            Home
          </Link>
          <Link href="/about" className="text-primary border-b-1 pb-2">
            About
          </Link>
          <Link href="/services" className="text-primary border-b-1 pb-2">
            Services
          </Link>
          <Link href="/partners" className="text-primary border-b-1 pb-2">
            Partners
          </Link>
          <Link href="/contacts" className="text-primary border-b-1 pb-2">
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;