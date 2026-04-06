'use client';

import { notFound, useParams } from 'next/navigation';
import { services } from '@/data/services';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const topics = service.topics ?? [];
    const [activeId, setActiveId] = useState(topics[0]?.id);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const sectionRefs = useRef({});
    const contentRef = useRef(null);

    // Highlight sidebar topic as user scrolls
    useEffect(() => {
        const container = contentRef.current;
        if (!container) return;

        const updateActive = () => {
            const scrollTop = container.scrollTop;
            // Walk sections in reverse; pick the last one whose top is <= scrollTop + small offset
            let found = topics[0]?.id;
            for (const { id } of topics) {
                const el = sectionRefs.current[id];
                if (!el) continue;
                if (el.offsetTop <= scrollTop + 40) {
                    found = id;
                }
            }
            setActiveId(found);
        };

        updateActive();
        container.addEventListener('scroll', updateActive, { passive: true });
        return () => container.removeEventListener('scroll', updateActive);
    }, [topics]);

    // Hide scroll hint when user reaches the bottom
    useEffect(() => {
        const container = contentRef.current;
        if (!container) return;
        const onScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 40);
        };
        container.addEventListener('scroll', onScroll);
        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    // Scroll to topic
    const scrollToTopic = (id) => {
        const container = contentRef.current;
        const target = sectionRefs.current[id];
        if (!container || !target) return;
        container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        setActiveId(id);
    };

    // Parse body text into paragraphs and bullet points
    const parseBullets = (body) => {
        const lines = body.split('\n');
        const bullets = [];
        const paragraphs = [];
        let currentParagraph = [];

        lines.forEach((line) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('•')) {
                if (currentParagraph.length) {
                    paragraphs.push(currentParagraph.join(' '));
                    currentParagraph = [];
                }
                bullets.push(trimmed.replace(/^•\s*/, ''));
            } else if (trimmed === '') {
                if (currentParagraph.length) {
                    paragraphs.push(currentParagraph.join(' '));
                    currentParagraph = [];
                }
            } else {
                if (!trimmed.endsWith(':')) {
                    currentParagraph.push(trimmed);
                }
            }
        });
        if (currentParagraph.length) paragraphs.push(currentParagraph.join(' '));

        return { paragraphs, bullets };
    };

    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mt-16 md:mt-32 lg:mt-40 mx-auto">

                {/* ── Page header ───────────────────────────── */}
                <div className="text-center mb-12 md:mb-20">
                    <h1 className="font-display text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-content-primary tracking-tight mb-4 leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-[14px] md:text-[16px] text-content-secondary leading-[1.6] md:leading-[1.8] max-w-2xl mx-auto px-2">
                        {service.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        {service.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>
                </div>

                {/* ── Two-column layout ─────────────────────── */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* ── LEFT SIDEBAR (Desktop only) ───────── */}
                    <aside className="hidden lg:flex sticky top-28 w-[280px] shrink-0 rounded-2xl border border-white/[0.07] bg-white/3 p-6 flex-col gap-6">
                        {/* Topics nav */}
                        <div>
                            <p className="text-[24px] font-semibold tracking-widest text-content-tertiary uppercase mb-10">
                                Topics
                            </p>
                            <nav className="flex flex-col gap-4">
                                {topics.map(({ id, label }) => {
                                    const isActive = activeId === id;
                                    return (
                                        <button
                                            key={id}
                                            onClick={() => scrollToTopic(id)}
                                            className={`
                                                text-left px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 cursor-pointer
                                                ${isActive
                                                    ? 'bg-purple-500/15 text-purple-300 border-l-2 border-purple-400 pl-[10px]'
                                                    : 'text-content-secondary hover:text-content-primary hover:bg-white/4'
                                                }
                                            `}
                                        >
                                            {label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-40">
                            <Button href="/contact" variant="primary" className="w-full justify-center">
                                Start a project →
                            </Button>
                        </div>
                    </aside>

                    {/* ── RIGHT CONTENT ─────────────────────── */}
                    <div className="flex-1 min-w-0 relative w-full">
                        {/* Scrollable content — Responsive: scrollable on desktop, natural on mobile */}
                        <div
                            ref={contentRef}
                            className="rounded-2xl border border-white/7 bg-white/2 lg:overflow-y-auto"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {topics.map(({ id, heading, body }, index) => {
                                const isLast = index === topics.length - 1;
                                const { paragraphs, bullets } = parseBullets(body);

                                return (
                                    <div
                                        key={id}
                                        ref={(el) => (sectionRefs.current[id] = el)}
                                        className={`px-6 py-8 md:px-10 md:py-12 ${!isLast ? 'border-b border-purple-50/20' : ''}`}
                                    >
                                        {/* Section heading */}
                                        <h2 className="font-display text-[28px] font-bold text-content-primary tracking-tight mb-5">
                                            {heading}
                                        </h2>

                                        {/* Paragraphs */}
                                        {paragraphs.map((para, i) => (
                                            <p key={i} className="text-[15px] text-content-secondary leading-[1.85] mb-4">
                                                {para}
                                            </p>
                                        ))}

                                        {/* Bullet list */}
                                        {bullets.length > 0 && (
                                            <ul className="flex flex-col gap-3 mt-6">
                                                {bullets.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-purple-400 shrink-0" />
                                                        <span className="text-[14px] text-content-secondary leading-relaxed">
                                                            {point}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}