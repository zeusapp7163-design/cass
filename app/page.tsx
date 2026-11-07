import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TopCasinos } from '@/components/TopCasinos';
import { Quiz } from '@/components/Quiz';
import { BonusBand } from '@/components/BonusBand';
import { Slots } from '@/components/Slots';
import { HowWeRate } from '@/components/HowWeRate';
import { Faq } from '@/components/Faq';
import { SeoText } from '@/components/SeoText';
import { Footer } from '@/components/Footer';
import { MobileCta } from '@/components/MobileCta';
import { JsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <TopCasinos />
        <Quiz />
        <BonusBand />
        <Slots />
        <HowWeRate />
        <Faq />
        <SeoText />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
