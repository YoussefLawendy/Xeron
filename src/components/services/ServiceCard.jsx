import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function ServiceCard({ service }) {
    return (
        <article
            className="
            group relative rounded-2xl p-[2px]
            bg-gradient-to-br from-purple-200 via-purple-50 to-purple-500
            transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        "
        >
            {/* Inner Card */}
            <div
                className="
                flex h-full flex-col rounded-2xl p-6
                bg-purple-950
            "
            >
                {/* Icon */}
                <div
                    className="
                    flex h-16 w-16 items-center justify-center rounded-xl
                    bg-purple-500/10 border border-purple-400/20
                "
                >
                    <Icon icon={service.icon} className="h-12 w-12 text-purple-300" />
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col">

                    {/* Text + Subtext */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-purple-50">
                            {service.title}
                        </h3>

                        <p className="text-base leading-relaxed text-purple-50/80">
                            {service.shortDesc}
                        </p>
                    </div>

                    {/* Button */}
                    <Link
                        href={`/services/${service.slug}`}
                        className="
                        mt-8 text-sm font-medium
                        text-purple-50 transition-colors duration-200
                        hover:text-white
                    "
                    >
                        Explore {service.title} →
                    </Link>
                </div>
            </div>
        </article>
    );
}