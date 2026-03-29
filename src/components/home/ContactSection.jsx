import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactSection() {
    return (
        <section className="py-24 px-6" id="contact">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <SectionHeader
                    title="Contact Us"
                    subtitle="We Here To Help You Creating Your Idea"
                    centered
                />

                {/* Two-column layout */}
                <div className="mt-16 flex flex-col md:flex-row items-start gap-10">

                    {/* Left — form card */}
                    {/* Outer shell = 2px gradient border */}
                    <div className="relative flex-[1.4] p-[2px] rounded-2xl bg-gradient-to-bl from-purple-200 via-purple-50 to-purple-500">
                        {/* Inner card = purple gradient background */}
                        <div
                            className="rounded-2xl bg-gradient-to-br from-purple-950 to-purple-1000"
                            style={{ padding: '40px 56px' }}
                        >
                            <ContactForm />
                        </div>
                    </div>

                    {/* Right — contact info, no card */}
                    <div className="flex-1 pt-2">
                        <ContactInfo />
                    </div>

                </div>
            </div>
        </section>
    );
}