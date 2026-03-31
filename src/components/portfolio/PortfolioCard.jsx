import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

export default function PortfolioCard({ item }) {
    return (
        <Link
            href={`/portfolio/${item.slug}`}
            className="block relative rounded-2xl overflow-hidden aspect-3/2
                transition-all duration-200 hover:-translate-y-1 hover:shadow-card group"
        >
            {/* Image fills the entire card */}
            <Image
                src={'/ImagePlaceholder.png'}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Gradient overlay — transparent at top, dark at bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text content pinned to the bottom over the image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <h3 className="font-display text-[16px] md:text-[15px] font-bold text-white leading-snug">
                    {item.title}
                </h3>
                <p className="text-xs md:text-[13px] text-white/75 leading-[1.65]">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1 opacity-70">
                    {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </div>
        </Link>
    );
}

