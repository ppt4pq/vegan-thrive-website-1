"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState} from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const linkClass = (path: string) => 
        `px-2 py-1 transition border-b-2 ${
            pathname === path ? 'border-white' : 'border-transparent'
            } hover:border-gray-400`;

    return (
        <nav className="font-sans absolute p-4 w-full z-100">
            <div className="hidden md:flex space-x-5 flex justify-end me-15 text-white">
                <a href="/" className={linkClass('/')}>Home</a>
                <a href="/blog" className={linkClass('/blog')}>Blog</a>
                <a href="/contact" className={linkClass('/contact')}>Contact</a>
            </div>
            <div className="md:hidden">
                <button className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
        </nav>
    );
}