import { notFound } from 'next/navigation';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export async function generateStaticParams() {
    return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const item = portfolio.find((p) => p.slug === params.slug);
    if (!item) return {};
    return { title: `${item.title} — XERON` };
}

export default function PortfolioDetailPage({ params }) {
    const item = portfolio.find((p) => p.slug === params.slug);
    if (!item) notFound();

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-bg-border mb-12">
                    <Image
                        src={item.image || '/ImagePlaceholder.png'}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>

                <h1 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold
          text-content-primary tracking-tight leading-snug mb-5">
                    {item.title}
                </h1>

                <p className="text-[16px] text-content-secondary leading-[1.8] mb-10">
                    {item.description}
                </p>

                <Button href="/portfolio" variant="outline">← Back to Portfolio</Button>
            </div>
        </div>
    );
}