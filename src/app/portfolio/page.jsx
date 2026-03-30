import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { portfolio } from '@/data/portfolio';

export const metadata = {
    title: 'XERON -Portfolio',
    description: 'Real projects. Real impact. Built for people who think bigger.',
};

export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="What We've Built"
                    subtitle="Real projects. Real impact. Built for people who think bigger."
                    centered
                />
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolio.map((item) => (
                        <PortfolioCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}