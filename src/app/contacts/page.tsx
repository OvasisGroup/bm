"use client"; // Required for App Router


import Choose from "@/components/Choose";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setLoading(false);
        setStatus(result.message);
        if (response.ok) setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section>
            <Image src={'/contacts.jpg'} alt='logo' width={1000} height={100} className='w-full opacity-100 mt-20' />
            <div className="container mx-auto px-4 py-8">
                <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <small className='text-primary font-black'>GET IN TOUCH</small>
                        <h1 className='font-black md:text-4xl text-3xl md:max-w-md'>Need help? <br />Get
                            intouch</h1>
                    </div>
                    <div>
                        <p>Beyond Matrix Ltd is a highly diversified and integrated company providing specialised solutions in: Construction, Engineering & ICT infrastructure</p>
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
                <div className="md:mr-20">
                    
                    <h3 className="font-bold text-primary text-2xl">Say Hello!</h3>
                    <Image src="/SVG/bm-logo.svg" alt="logo" width={150} height={100} className="my-4"  />
                    
            <p className=''>The Nextgen Mall, Mombasa Road</p>
            <p className=''>P.O Box 34752 – 00100, Nairobi, Kenya</p>
            <p className=''>+254 757 435 210</p>
            <p className=''>info@beyondmatrixltd.co.ke</p>
            
                </div>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border p-2 w-full"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border p-2 w-full"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        className="border p-2 w-full h-24"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        className="bg-blue-900 hover:bg-blue-600 text-white font-bold border-1 hover:cursor-pointer p-2 w-full"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>
                    {status && <p className="mt-2 text-sm">{status}</p>}
                </form>
            </section>
            <Choose/>
        </section>
    );
}