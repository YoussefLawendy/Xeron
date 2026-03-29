import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const navLinks = [
    { label: 'Home',       href: '/'          },
    { label: 'About',      href: '/about'      },
    { label: 'Services',   href: '/services'   },
    { label: 'Portfolio',  href: '/portfolio'  },
    { label: 'Contact Us', href: '/contact'    },
];

const socials = [
    { icon: 'mynaui:facebook',  href: '#', label: 'Facebook' },
    { icon: 'mynaui:instagram', href: '#', label: 'Instagram' },
    { icon: 'mynaui:x-twitter', href: '#', label: 'X'        },
    { icon: 'mynaui:linkedin',  href: '#', label: 'LinkedIn'  },
    { icon: 'mynaui:github',    href: '#', label: 'Github'    },
];

function GradientBorderIcon({ icon, href, label }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="relative inline-flex rounded-full p-[1.5px] bg-gradient-to-br
                from-purple-200 via-purple-50 to-purple-500
                hover:opacity-80 transition-opacity duration-200"
        >
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-1000 relative">
                <span className="absolute inset-0 rounded-full bg-purple-50/10" />
                <Icon icon={icon} className="w-6 h-6 text-content-primary relative z-10" aria-hidden />
            </span>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 mb-10">
                    <Image src="/Logo.svg" alt="Xeron Logo" width={140} height={80} />
                </Link>

                {/* Nav */}
                <nav className="flex flex-wrap justify-center gap-10 mb-10">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[16px] text-purple-50/70 hover:text-white transition-colors duration-200"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex gap-4 mb-10">
                    {socials.map((s) => (
                        <GradientBorderIcon key={s.label} {...s} />
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-purple-50/80 mb-10" />

                {/* Copyright */}
                <p className="text-[16px] text-purple-50/80 text-center">
                    © 2026 XERON. All rights reserved. Built with passion for the brands that dare to grow.
                </p>

            </div>
        </footer>
    );
}