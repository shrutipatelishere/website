export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-1 ${alignments[align]} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-2 sm:mb-3 block text-[10px] sm:text-xs">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-display text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground dark:text-foreground-dark text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
