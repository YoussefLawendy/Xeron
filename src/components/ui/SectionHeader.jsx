export default function SectionHeader({ title, subtitle, centered = false }) {
    return (
        <div className={`max-w-2xl mb-[40px] md:mb-[56px] lg:mb-[80px] ${centered ? 'text-center mx-auto' : ''}`}>
            <h2 className="font-display text-[36px] md:text-[48px] lg:text-[64px] font-extrabold text-content-primary tracking-tight leading-tight mb-3">
                {title}
            </h2>
            {subtitle && (
                <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#6F6E7B] leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}