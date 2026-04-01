import PortfolioCard from './PortfolioCard';
import { portfolio } from '@/data/portfolio';

/**
 * PortfolioGrid — renders all portfolio items in a 2-column responsive grid.
 * Pass `preview={true}` to render only the first 4 (for homepage).
 * Pass `variant="portfolio"` for 400×400 cards (same as portfolio page).
 */
export default function PortfolioGrid({ preview = false, variant = 'default' }) {
    const items = preview ? portfolio.slice(0, 4) : portfolio;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => (
                <PortfolioCard key={item.slug} item={item} variant={variant} />
            ))}
        </div>
    );
}