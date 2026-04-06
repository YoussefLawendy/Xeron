import { notFound } from 'next/navigation';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';

export async function generateStaticParams() {
    return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = portfolio.find((p) => p.slug === slug);
    if (!item) return {};
    return { title: `Portfolio - ${item.title}` };
}

export default async function PortfolioDetailPage({ params }) {
    const { slug } = await params;
    const item = portfolio.find((p) => p.slug === slug);
    if (!item) notFound();

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* ── Hero: Title + Subtitle ── */}
                <div className="text-center mt-40 mb-24">
                    <SectionHeader
                        title={item.title}
                        subtitle={item.subtitle || item.description}
                        tags={item.tags}
                        centered
                    />
                </div>

                {/* ── Problem Statement: image left (1 col), text right (2 cols) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch mb-20">

                    {/* Image */}
                    <div className="col-span-1 order-1 lg:order-0 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-full mx-auto lg:max-w-none">
                        <div className="relative w-full h-full aspect-16/10 md:aspect-video min-h-[220px] md:min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src={item.images?.[0] || item.image || '/ImagePlaceholder.png'}
                                alt={`${item.title} — problem`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[32px]">
                        <h2 className="font-display text-[16px] md:text-[24px] lg:text-[28px] font-bold text-content-primary">
                            The Problem Statement
                        </h2>
                        {item.problem?.map((para, i) => (
                            <p key={i} className="text-xs md:text-[16px] lg:text-[18px] text-[#6F6E7B] leading-[1.75] opacity-70">
                                {para}
                            </p>
                        ))}
                    </div>
                </div>

                {/* ── The Solution: text left (2 cols), image right (1 col) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch mb-24">

                    {/* Content */}
                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-0 flex flex-col gap-[28px] md:gap-[32px]">
                        <h2 className="font-display text-[16px] md:text-[24px] lg:text-[28px] font-bold text-content-primary">
                            The Solution
                        </h2>
                        {item.solution?.map((para, i) => (
                            <p key={i} className="text-xs md:text-[16px] lg:text-[18px] text-[#6F6E7B] leading-[1.75] opacity-70">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Image */}
                    <div className="col-span-1 order-1 lg:order-0 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-full mx-auto lg:max-w-none">
                        <div className="relative w-full h-full aspect-16/10 md:aspect-video min-h-[220px] md:min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src={item.images?.[1] || item.image || '/ImagePlaceholder.png'}
                                alt={`${item.title} — solution`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ── All Process ── */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-display text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-content-primary">
                            All Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-20">
                        {item.processSteps.map((step, i) => (
                            <Link
                                key={i}
                                href={`/portfolio/${item.slug}/${step.slug}`}
                                className="group"
                            >
                                <div className="relative p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    {/* Inner Card */}
                                    <div className="relative w-full aspect-4/3 rounded-[16px] overflow-hidden bg-white">

                                        {/* Image */}
                                        <Image
                                            src={step.image || item.image || '/ImagePlaceholder.png'}
                                            alt={`${item.title} — ${step.name}`}
                                            fill
                                            sizes="33vw"
                                            className="object-cover"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-1000/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-end p-1.5 sm:p-2 md:p-4">
                                            <div className="w-full text-purple-50">
                                                <h3 className="text-[10px] sm:text-xs md:text-2xl text-center font-bold leading-tight line-clamp-2">
                                                    {step.name}
                                                </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ── Back ── */}
                <Button href="/portfolio" variant="outline">
                    ← Back to Portfolio
                </Button>

            </div>
        </div>
    );
}