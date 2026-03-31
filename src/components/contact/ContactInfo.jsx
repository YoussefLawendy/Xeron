'use client';

import { Icon } from '@iconify/react';

const socials = [
    { icon: 'mynaui:facebook', href: '#', label: 'Facebook' },
    { icon: 'mynaui:instagram', href: '#', label: 'Instagram' },
    { icon: 'mynaui:x-twitter', href: '#', label: 'X' },
    { icon: 'mdi:whatsapp', href: '#', label: 'WhatsApp' },
    { icon: 'mynaui:linkedin', href: '#', label: 'LinkedIn' },
];

// Single-line string — prevents SSR/client whitespace normalization mismatch
const gradientRingClass = 'relative inline-flex rounded-full p-[1px] bg-gradient-to-br from-purple-200 via-purple-50 to-purple-500 opacity-50 hover:opacity-100 transition-opacity duration-200';

function GradientBorderIcon({ icon, href, label }) {
    return (
        <a href={href} aria-label={label} className={gradientRingClass}>
            <span className="w-6 md:w-10 h-6 md:h-10 rounded-full flex items-center justify-center bg-purple-1000 relative">
                <span className="absolute inset-0 rounded-full bg-purple-50/10" />
                <Icon icon={icon} className="w-3 md:w-6 h-3 md:h-6 text-content-primary relative z-10" />
            </span>
        </a>
    );
}

export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-8 pt-2">

            {/* Email */}
            <div className="flex items-start gap-4">
                <div className="mt-0.5 text-content-secondary">
                    <Icon icon="mynaui:mail" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-[16px] md:text-[20px] font-bold text-content-primary">Email</span>
                    <a href="mailto:Youssef@xeron.com" className="text-xs md:text-[16px] font-bold text-purple-50/50 hover:text-purple-50/80 transition-colors duration-200">
                        Youssef@xeron.com
                    </a>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
                <div className="mt-0.5 text-content-secondary">
                    <Icon icon="mynaui:telephone-call" className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-[16px] md:text-[20px] font-bold text-content-primary">Phone</span>
                    <a href="tel:+201063361951" className="text-xs md:text-[16px] font-bold text-purple-50/50 hover:text-purple-50/80 transition-colors duration-200">
                        +201063361951
                    </a>
                </div>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-3">
                <span className="text-sm md:text-[20px] font-bold text-content-primary">Get In Touch</span>
                <div className="flex items-center gap-2.5 flex-wrap">
                    {socials.map((s) => (
                        <GradientBorderIcon key={s.label} {...s} />
                    ))}
                </div>
            </div>

        </div>
    );
}