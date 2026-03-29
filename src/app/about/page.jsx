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
                <div className="max-w-2xl mb-24">
                    <SectionHeader
                        title="The Minds Behind XERON"
                        subtitle="We started as college friends with a shared obsession — technology that actually moves people. That hasn't changed."
                    />
                    <div className="mt-8">
                        <Button href="/contact" variant="primary">Work With Us</Button>
                    </div>
                </div>

                {/* Team image */}
                <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-bg-border mb-24">
                    <Image
                        src="/ImagePlaceholder.png"
                        alt="XERON Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold
              text-content-primary tracking-tight mb-5">
                            How It Started
                        </h2>
                        <p className="text-[15px] text-content-secondary leading-[1.8]">
                            XERON was born in 2022 from a college dorm and a stubborn belief that great software
                            shouldn&apos;t be a luxury reserved for funded startups. Two friends, one laptop, and a lot
                            of late nights later — we built our first client project. Then another. Then ten more.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold
              text-content-primary tracking-tight mb-5">
                            Where We Are Now
                        </h2>
                        <p className="text-[15px] text-content-secondary leading-[1.8]">
                            Today XERON is a full-service digital agency — design, development, branding — all
                            under one roof. We work with entrepreneurs and early-stage companies who want to move
                            fast and look great doing it.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <SectionHeader title="What We Stand For" centered />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="bg-bg-card border border-bg-border rounded-2xl p-7
                  hover:border-accent hover:-translate-y-1 hover:shadow-card
                  transition-all duration-200"
                            >
                                <span className="text-2xl mb-4 block">
                                    <Icon icon={v.icon} className="w-7 h-7" aria-hidden />
                                </span>
                                <h3 className="font-display font-bold text-content-primary mb-2">{v.title}</h3>
                                <p className="text-[13px] text-content-secondary leading-[1.7]">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}