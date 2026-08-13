import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const GITHUB_USER = 'mattelavishnuvardhan2008-spec';

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Personal',
    name: 'Mythirdrepository',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmythirdrepository.vercel.app?w=1200',
    liveUrl: 'https://mythirdrepository.vercel.app',
    githubUrl: `https://github.com/${GITHUB_USER}/Mythirdrepository`,
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Mysecondrepository2026',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmysecondrepository2026.vercel.app?w=1200',
    liveUrl: 'https://mysecondrepository2026.vercel.app',
    githubUrl: `https://github.com/${GITHUB_USER}/Mysecondrepository2026`,
  },
  {
    number: '03',
    category: 'Personal',
    name: 'Harshavardhanportfolio',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fharshavardhanportfolio-eight.vercel.app?w=1200',
    liveUrl: 'https://harshavardhanportfolio-eight.vercel.app',
    githubUrl: `https://github.com/${GITHUB_USER}/Harshavardhanportfolio`,
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 md:top-32 h-auto min-h-[70vh] sm:h-[85vh] flex items-center py-4"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[28px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 md:gap-8 origin-top"
      >
        {/* Top row */}
        <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 flex-wrap">
          <span
            className="text-[#D7E2EA] font-black leading-none"
            style={{ fontSize: 'clamp(2.25rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
            <span className="text-[#D7E2EA] uppercase font-medium text-lg sm:text-2xl md:text-3xl truncate">
              {project.name}
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source on GitHub`}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors duration-200 flex-shrink-0"
            >
              <Github size={18} />
            </a>
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Screenshot */}
        <div className="flex-1 min-h-0">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-[20px] sm:rounded-[40px] md:rounded-[50px]"
            style={{ minHeight: '220px' }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
