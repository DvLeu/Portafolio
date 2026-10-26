// Shared heading for every page section, e.g. "About Me" with "Me" in red
export const SectionHeader = ({ title, highlight, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">
      {title} <span className="text-primary">{highlight}</span>
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);
