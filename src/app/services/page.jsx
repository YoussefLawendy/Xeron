import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/data/services';

export const metadata = {
    title: 'Services — XERON',
    description: 'Everything your startup needs to build, launch, and grow — under one roof.',
};

export default function ServicesPage() {
    return (
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
            <div className="max-w-7xl mt-16 md:mt-32 lg:mt-40 mx-auto">
                <SectionHeader
                    title="Our Services"
                    subtitle="Everything your startup needs to build, launch, and grow — under one roof."
                    centered
                />
                <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((s) => (
                        <ServiceCard key={s.slug} service={s} />
                    ))}
                </div>
            </div>
        </div>
    );
}