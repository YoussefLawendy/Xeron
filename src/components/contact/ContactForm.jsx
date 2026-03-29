'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const serviceTypes = ['Web', 'Mobile', 'Design'];

// ─── Gradient-border input wrapper ───────────────────────────────────────────
// The trick: outer div = 1px gradient shell (opacity-30 idle, opacity-100 focused)
//            inner input = bg-purple-975, no border of its own
function GradientField({ children, focused }) {
    return (
        <div
            className={`p-[2px] rounded-lg transition-opacity duration-200 bg-gradient-to-bl
                from-purple-200 via-purple-50 to-purple-500
                ${focused ? 'opacity-100' : 'opacity-60'}`}
        >
            {children}
        </div>
    );
}

// Controlled input that tracks its own focus state
function GradientInput({ className = '', ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <GradientField focused={focused}>
            <input
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full bg-purple-975 rounded-[7px] px-4 py-3
                    text-[14px] text-content-primary placeholder:text-content-muted
                    outline-none transition-colors duration-200 ${className}`}
            />
        </GradientField>
    );
}

// Controlled textarea that tracks its own focus state
function GradientTextarea({ className = '', ...props }) {
    const [focused, setFocused] = useState(false);
    return (
        <GradientField focused={focused}>
            <textarea
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className={`w-full bg-purple-975 rounded-[8px] px-4 py-4
                    text-[14px] text-content-primary placeholder:text-content-muted
                    outline-none resize-y transition-colors duration-200 ${className}`}
            />
        </GradientField>
    );
}

// ─── Gradient radio button ────────────────────────────────────────────────────
function RadioButton({ label, checked, onChange }) {
    return (
        <label className="flex items-center gap-2 text-[14px] text-content-secondary cursor-pointer">
            <input
                type="radio"
                name="serviceType"
                value={label}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            {/* Outer ring — always gradient border, opacity fades when unchecked */}
            <span
                className={`relative w-6 h-6 rounded-full flex-shrink-0 p-[2px]
                    bg-gradient-to-bl from-purple-200 via-purple-50 to-purple-500
                    transition-opacity duration-200
                    ${checked ? 'opacity-100' : 'opacity-40'}`}
            >
                {/* Inner circle background */}
                <span className="w-full h-full rounded-full bg-purple-975 flex items-center justify-center">
                    {/* Dot — only visible when selected, gradient fill */}
                    {checked && (
                        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-bl from-purple-200 via-purple-50 to-purple-500" />
                    )}
                </span>
            </span>

            {label}
        </label>
    );
}

// ─── Main form ────────────────────────────────────────────────────────────────
export default function ContactForm() {
    const [serviceType, setServiceType] = useState('Web');

    return (
        <div className="flex flex-col gap-8">

            {/* Logo — centered */}
            <div className="flex items-center justify-center mb-12 mt-4">
                <img src="/Logo.svg" alt="Xeron" className="h-9 w-auto" />
            </div>

            {/* Name + Company */}
            <div className="flex gap-6">
                <div className="flex flex-col gap-4 flex-1">
                    <label className="text-[16px] font-bold text-purple-50">Name</label>
                    <GradientInput type="text" placeholder="Youssef" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <label className="text-[16px] font-bold text-purple-50">Company</label>
                    <GradientInput type="text" placeholder="Xeron" />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4">
                <label className="text-[16px] font-bold text-purple-50">Email</label>
                <GradientInput type="email" placeholder="example@email.com" />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-4">
                <label className="text-[16px] font-bold text-purple-50">
                    Phone number
                </label>

                <div className="flex gap-6">
                    <div className="flex flex-col gap-4 w-15">
                        <GradientInput type="text" placeholder="+20" />
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                        <GradientInput type="tel" placeholder="1063361951" />
                    </div>
                </div>
            </div>

            {/* Service type */}
            <div className="flex flex-col gap-4">
                <label className="text-[16px] font-bold text-purple-50">Service Type</label>
                <div className="flex flex-wrap gap-5">
                    {serviceTypes.map((type) => (
                        <RadioButton
                            key={type}
                            label={type}
                            checked={serviceType === type}
                            onChange={() => setServiceType(type)}
                        />
                    ))}
                </div>
            </div>

            {/* Project brief */}
            <div className="flex flex-col gap-4">
                <label className="text-[16px] font-bold text-purple-50">Project brief</label>
                <GradientTextarea
                    placeholder="Type your message here..."
                    rows={4}
                    className="min-h-[100px]"
                />
            </div>

            {/* Submit */}
            <div>
                <Button variant="primary">Send message →</Button>
            </div>

        </div>
    );
}