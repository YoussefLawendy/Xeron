'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Jobs', href: '/jobs' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-300 transition-all duration-300
        ${scrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-[90px] flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Logo.svg"
                            alt="Xeron"
                            width={140}
                            height={32}
                            className="w-[100px] md:w-[120px] lg:w-[140px] h-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="text-lg text-gray-300 hover:text-white transition"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/*Hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 z-400"
                        aria-label="Open menu"
                    >
                        <span className="block w-6 h-[2px] bg-white rounded" />
                        <span className="block w-6 h-[2px] bg-white rounded" />
                        <span className="block w-6 h-[2px] bg-white rounded" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu
                links={navLinks}
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}