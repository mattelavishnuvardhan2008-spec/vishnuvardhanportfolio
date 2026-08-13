import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex flex-row flex-wrap justify-between items-center gap-x-4 gap-y-2 px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
              
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="flex-1 flex items-center overflow-hidden w-full px-4 sm:px-6 md:px-10">
        <FadeIn delay={0.15} y={40} as="h1" className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
            Hi, i&apos;m vishnu
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-4 sm:px-6 md:px-10 pb-8 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
