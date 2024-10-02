import { HeroSection } from "./_sections/HeroSection";
import { AudienceSection } from "./_sections/AudienceSection";
import { ServiceSection } from "./_sections/ServicesSection";
import { AboutSection } from "./_sections/AboutSection";
import { FAQSection } from "./_sections/FAQSection";
import { ContactSection } from "./_sections/ContactSection";

export default function IndexPage() {

    return (
        <main className="h-screen">
            <HeroSection />

            <div className="max-w-7xl px-2 mx-auto flex flex-col items-center gap-20 relative -top-14 mb-12
                md:max-w-4xl
                lg:max-w-6xl
                xl:max-w-7xl
            ">
                <AudienceSection />
                <ServiceSection />
                <AboutSection />
                <FAQSection />
            </div>

            <ContactSection />
        </main>
    );
}