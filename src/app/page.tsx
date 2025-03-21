import Hero from "@/components/Hero";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Hero/>
    <Image src='/SVG/bar.svg' alt='logo' width={1000} height={100} className='w-full' />
    </>
  );
}
