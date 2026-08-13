import { Github, Mail } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const EMAIL = 'mattelavishnuvardhan2008@gmail.com';
const GITHUB_USER = 'mattelavishnuvardhan2008-spec';
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center text-center gap-8 sm:gap-10"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA] font-light max-w-md"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}
        >
          Have a project in mind or just want to say hi? Reach out below.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="w-full flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-[#D7E2EA] font-medium tracking-wide hover:opacity-70 transition-opacity duration-200 text-sm sm:text-base break-all"
          >
            <Mail size={20} className="flex-shrink-0" />
            {EMAIL}
          </a>
          
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D7E2EA] font-medium tracking-wide hover:opacity-70 transition-opacity duration-200 text-sm sm:text-base"
          >
            <Github size={20} className="flex-shrink-0" />
            {GITHUB_USER}
          </a>
        </div>

        <ContactButton />
      </FadeIn>

      <p className="text-[#D7E2EA]/40 text-xs uppercase tracking-widest pt-6 sm:pt-10">
        &copy; {new Date().getFullYear()} Vishnu. All rights reserved.
      </p>
    </section>
  );
}
