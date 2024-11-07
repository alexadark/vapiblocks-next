// import Orb from '@/components/orb';
import Hero from '@/components/hero';
import FeaturesSection from '@/components/features-section';

import AboutSection from '@/components/about-section';
import HowItWorksSection from '@/components/how-it-works-section';
export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between p-1 ">
      <div>
        {/* <div>
          <a
            href="https://vapiblocks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orb by VapiBlocks
          </a>
        </div> */}
      </div>
      {/* <Orb /> */}
      {/* <VapiGlob /> */}
      <Hero />
      <FeaturesSection />
      <AboutSection />

      <HowItWorksSection />
    </main>
  );
}
