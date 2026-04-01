import { notFound } from 'next/navigation';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';

export async function generateStaticParams() {
    return portfolio.flatMap((p) =>
        p.processSteps.map((step) => ({
            slug: p.slug,
            section: step.slug,
        }))
    );
}

export async function generateMetadata({ params }) {
    const { slug, section } = await params;
    const item = portfolio.find((p) => p.slug === slug);
    const step = item?.processSteps.find((s) => s.slug === section);
    if (!item || !step) return {};
    return { title: `${item.title} - ${step.name}` };
}

function phaseLeadCopy(stepSlug, item, stepName) {
    const lines = {
        'ui-screens': `For ${item.title}, we refined visual hierarchy, spacing, and component states so the experience stays consistent across every screen.`,
        wireframes: `Before visual polish, we structured flows and layout for ${item.title}—wireframes aligned the team on intent and cut rework later.`,
        prototype: `Interactive prototypes let us validate ${item.title} with stakeholders early, so build cycles focused on the right details.`,
    };
    return (
        lines[stepSlug] ||
        `Design and delivery notes for the ${stepName} phase of ${item.title}.`
    );
}

export default async function PortfolioProcessSectionPage({ params }) {
    const { slug, section } = await params;
    const item = portfolio.find((p) => p.slug === slug);
    if (!item) notFound();

    const stepIndex = item.processSteps.findIndex((s) => s.slug === section);
    if (stepIndex < 0) notFound();

    const step = item.processSteps[stepIndex];
    const prev = item.processSteps[stepIndex - 1];
    const next = item.processSteps[stepIndex + 1];

    const heroSrc =
        item.processImages?.[stepIndex] ||
        step.image ||
        item.images?.[0] ||
        item.image ||
        '/ImagePlaceholder.png';

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mt-40 mb-24">
                    <SectionHeader
                        title={step.name}
                        subtitle={item.subtitle}
                        centered
                    />
                </div>

                <div className="p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-5xl mx-auto mb-14">
                    <div className="relative w-full aspect-video min-h-[240px] md:min-h-[360px] rounded-[16px] overflow-hidden bg-white">
                        <Image
                            src={heroSrc}
                            alt={`${item.title} — ${step.name}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 896px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-6 mb-16">
                    <p className="text-sm md:text-[16px] lg:text-[18px] text-[#6F6E7B] leading-[1.75] opacity-90">
                        {phaseLeadCopy(section, item, step.name)}
                    </p>
                    {item.description && (
                        <p className="text-xs md:text-[16px] text-[#6F6E7B] leading-[1.75] opacity-70">
                            {item.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button href={`/portfolio/${item.slug}`} variant="outline">
                        ← All process
                    </Button>
                </div>
            </div>
        </div>
    );
}
