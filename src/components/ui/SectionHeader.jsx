import Badge from '@/components/ui/Badge';

export default function SectionHeader({
    title,
    subtitle,
    tags = [],
    centered = false
}) {
    return (
        <div
            className={`max-w-7xl mb-[40px] md:mb-[56px] lg:my-40 ${centered ? 'text-center mx-auto' : ''
                }`}
        >
            <h2 className="font-display text-[32px] md:text-[48px] lg:text-[64px] font-extrabold text-content-primary tracking-tight leading-tight mb-3">
                {title}
            </h2>

            {subtitle && (
                <p className="text-sm md:text-[18px] lg:text-[20px] text-[#6F6E7B] leading-relaxed">
                    {subtitle}
                </p>
            )}

            {tags.length > 0 && (
                <div
                    className={`flex flex-wrap gap-2 mt-6 ${centered ? 'justify-center' : ''
                        }`}
                >
                    {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            )}
        </div>
    );
}