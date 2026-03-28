import Navbar from "@/components/layout/Navbar";
import FooterContact from "@/components/layout/FooterContact";
import MobileNav from "@/components/layout/MobileNav";
import ContactHero from "@/components/contato/ContactHero";
import ContactGrid from "@/components/contato/ContactGrid";
import LocationSection from "@/components/contato/LocationSection";

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ContactHero />
        <ContactGrid />
        <LocationSection />
      </main>
      <FooterContact />
      <MobileNav />
    </>
  );
}
