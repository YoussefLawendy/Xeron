'use client';

import { Icon } from '@iconify/react';

const socials = [
    { icon: 'mynaui:facebook',  href: '#', label: 'Facebook'  },
    { icon: 'mynaui:instagram', href: '#', label: 'Instagram' },
    { icon: 'mynaui:x-twitter', href: '#', label: 'X'         },
    { icon: 'mdi:whatsapp',  href: '#', label: 'WhatsApp'  },
    { icon: 'mynaui:linkedin',  href: '#', label: 'LinkedIn'  },
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
            {/* Inner surface — dark bg + purple-50/10 overlay so gradient shows only as border */}
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-1000 relative">
                <span className="absolute inset-0 rounded-full bg-purple-50/10" />
                <Icon icon={icon} className="w-6 h-6 text-content-primary relative z-10" />
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
                    <span className="text-[20px] font-bold text-content-primary">Email</span>
                    <a
                        href="mailto:Youssef@xeron.com"
                        className="text-[16px] font-bold text-purple-50/50 hover:text-purple-50/80 transition-colors duration-200"
                    >
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
                    <span className="text-[20px] font-bold text-content-primary">Phone</span>
                    <a
                        href="tel:+201063361951"
                        className="text-[16px] font-bold text-purple-50/50 hover:text-purple-50/80 transition-colors duration-200"
                    >
                        +201063361951
                    </a>
                </div>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-3">
                <span className="text-[20px] font-bold text-content-primary">Get In Touch</span>
                <div className="flex items-center gap-2.5 flex-wrap">
                    {socials.map((s) => (
                        <GradientBorderIcon key={s.label} {...s} />
                    ))}
                </div>
            </div>

        </div>
    );
}