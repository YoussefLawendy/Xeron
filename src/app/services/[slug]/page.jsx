import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return {};
    return { title: `${service.title} — XERON` };
}

export default function ServiceDetailPage({ params }) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) notFound();

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30
          flex items-center justify-center text-2xl mb-8">
                    <Icon icon={service.icon} className="w-7 h-7" aria-hidden />
                </div>

                <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold
          text-content-primary tracking-tight mb-6">
                    {service.title}
                </h1>

                <p className="text-[16px] text-content-secondary leading-[1.8] mb-8">
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                    {service.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>

                <Button href="/contact" variant="primary">Start a Project →</Button>
            </div>
        </div>
    );
}