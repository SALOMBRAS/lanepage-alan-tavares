import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { Results } from "@/components/sections/results";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChoose } from "@/components/sections/why-choose";
import {
  contactData,
  differentiators,
  faqItems,
  footerData,
  headerData,
  heroData,
  practiceAreas,
  statistics,
  testimonials,
} from "@/lib/data";

/** Composition only. Each section intentionally renders an empty semantic shell. */
export default function HomePage() {
  return (
    <>
      <Header data={headerData} />
      <main id="conteudo" tabIndex={-1} className="pt-header">
        <Hero data={heroData} />
        <PracticeAreas items={practiceAreas} />
        <WhyChoose items={differentiators} />
        <Results items={statistics} />
        <Testimonials items={testimonials} />
        <FAQ items={faqItems} />
        <Contact data={contactData} />
      </main>
      <Footer data={footerData} />
      {/* Future: JsonLd + getAttorneySchema(siteConfig) when real details are visible. */}
      {/* Future: getFaqSchema(faqItems) beside the implemented FAQ accordion. */}
    </>
  );
}
