import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function ServicesSection() {
    return (
        <section className="py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Our Services"
                    subtitle="Everything your startup needs to build, launch, and grow — under one roof."
                    centered
                />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((s) => (
                        <ServiceCard key={s.slug} service={s} />
                    ))}
                </div>

                <div className="flex justify-center mt-[80px]">
                    <Button href="/services" variant="primary">See more</Button>
                </div>
            </div>
        </section>
    );
}