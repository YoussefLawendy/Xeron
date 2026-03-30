import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

export default function WhoWeAreSection() {
    return (
        <section className="py-[48px] px-[20px] md:py-[64px] md:px-[32px] lg:py-[80px] lg:px-[48px]">
            <div className="max-w-[1280px] mx-auto">
                <SectionHeader title="Who We Are" centered />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] md:gap-[56px] lg:gap-[80px] items-stretch">

                    {/* Image — 1/3 */}
                    <div className="col-span-1 p-[2px] rounded-[20px] bg-linear-to-br from-purple-200 via-purple-50 to-purple-500 shadow-[0_0_24px_rgba(109,0,255,0.35)] w-full max-w-[360px] mx-auto lg:max-w-none h-full">
                        <div className="relative w-full h-full min-h-[320px] rounded-[16px] overflow-hidden bg-white">
                            <Image
                                src="/ImagePlaceholder.png"
                                alt="Who We Are"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Content — 2/3 */}
                    <div className="col-span-2 flex flex-col gap-[28px] md:gap-[40px] lg:gap-[54px]">
                        <h3 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.1]">
                            The Minds Behind XERON
                        </h3>
                        <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                            XERON is a full-service digital agency built for startups and entrepreneurs.
                            We design, develop, and brand — websites, mobile apps, and visual identities
                            that make growing businesses impossible to ignore.
                        </p>
                        <p className="text-base md:text-[16px] lg:text-[24px] text-[#6F6E7B] leading-[1.75]">
                            Born from a college idea in 2022, we turned a friendship and a passion for
                            technology into something real. Today, every project we take on carries that
                            same energy — focused, intentional, and always built to last.
                        </p>
                        <div className="mt-[8px] md:mt-[16px] lg:mt-[24px]">
                            <Button href="/about" variant="primary" arrow>Who We Are</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}