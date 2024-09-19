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

            <div className="flex flex-col items-center gap-24 relative -top-14 mb-12">
                <AudienceSection />
                <ServiceSection />
                <AboutSection />
                <FAQSection />
            </div>

            <ContactSection />
        </main>
    );
}