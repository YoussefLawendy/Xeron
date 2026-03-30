import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export const metadata = {
    title: 'About Us — XERON',
    description: 'The minds behind XERON — a full-service digital agency built for startups.',
};

const values = [
    { icon: 'mdi:target', title: 'Intentional', desc: 'Every decision is purposeful. We never build something just because it looks cool — it has to work.' },
    { icon: 'mdi:flash', title: 'Fast', desc: 'We move fast without cutting corners. Speed and quality aren\'t mutually exclusive at XERON.' },
    { icon: 'mdi:handshake', title: 'Transparent', desc: 'No surprises. You\'ll always know where your project stands, what\'s next, and why.' },
    { icon: 'mdi:refresh', title: 'Built to Last', desc: 'We build systems that scale. Your growth is the only thing that should limit you.' },
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Hero */}
                <div className="max-w-7xl mt-40 mb-24 text-center">
                    <SectionHeader
                        title="The Minds Behind XERON"
                        subtitle="We started as college friends with a shared obsession — technology that actually moves people. That hasn't changed."
                    />
                    <div className="mt-8">
                        <Button href="/contact" variant="primary">Work With Us</Button>
                    </div>
                </div>

                {/* Team image (hidden on mobile) */}
                <div className="hidden md:block relative w-full aspect-16/7 rounded-2xl overflow-hidden border border-bg-border mb-24">
                    <Image
                        src="/ImagePlaceholder.png"
                        alt="XERON Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Stories */}
                <div className="flex flex-col gap-[80px]">

                    {/* Story 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch">

                        {/* Image */}
                        <div className="col-span-1 order-1 lg:order-0 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-[360px] mx-auto lg:max-w-none h-full">
                            <div className="relative w-full h-full min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                                <Image
                                    src="/ImagePlaceholder.png"
                                    alt="Who We Are"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[40px] lg:gap-[54px]">
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                XERON is a full-service digital agency built for startups and entrepreneurs.
                                We design, develop, and brand — websites, mobile apps, and visual identities
                                that make growing businesses impossible to ignore.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                        </div>
                    </div>

                    {/* Story 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch">

                        {/* Image */}
                        <div className="col-span-1 order-1 lg:order-2 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-[360px] mx-auto lg:max-w-none h-full">
                            <div className="relative w-full h-full min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                                <Image
                                    src="/ImagePlaceholder.png"
                                    alt="Who We Are"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-span-2 order-2 lg:order-1 flex flex-col gap-[28px] md:gap-[40px] lg:gap-[54px]">
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                XERON is a full-service digital agency built for startups and entrepreneurs.
                                We design, develop, and brand — websites, mobile apps, and visual identities
                                that make growing businesses impossible to ignore.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                        </div>
                    </div>

                    {/* Story 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch">

                        {/* Image */}
                        <div className="col-span-1 order-1 lg:order-0 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-[360px] mx-auto lg:max-w-none h-full">
                            <div className="relative w-full h-full min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                                <Image
                                    src="/ImagePlaceholder.png"
                                    alt="Who We Are"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[40px] lg:gap-[54px]">
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                XERON is a full-service digital agency built for startups and entrepreneurs.
                                We design, develop, and brand — websites, mobile apps, and visual identities
                                that make growing businesses impossible to ignore.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                            <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                                Born from a college idea in 2022, we turned a friendship and a passion for
                                technology into something real. Today, every project we take on carries that
                                same energy — focused, intentional, and always built to last.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Team image (appear on mobile) */}
                <div className="block md:hidden mt-24">
                    <div className="relative w-full aspect-16/7 rounded-2xl overflow-hidden border border-bg-border">
                        <Image
                            src="/ImagePlaceholder.png"
                            alt="XERON Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}