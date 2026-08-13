interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export default function LiveProjectButton({ href, className = '' }: LiveProjectButtonProps) {
  const classes = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-10 sm:py-3.5 text-xs sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 inline-block text-center whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        Live Project
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      Live Project
    </button>
  );
}
