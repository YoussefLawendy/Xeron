import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import Button from '@/components/ui/Button';
import { portfolio } from '@/data/portfolio';

export default function PortfolioSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="What We've Built"
                    subtitle="Real projects. Real Impact. Built for people who think bigger."
                    centered
                />

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolio.slice(0, 4).map((item) => (
                        <PortfolioCard key={item.slug} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Button href="/portfolio" variant="primary">See more</Button>
                </div>
            </div>
        </section>
    );
}