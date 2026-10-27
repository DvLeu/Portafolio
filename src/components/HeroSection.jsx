import { Fragment } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";

// Rendered as a Python dict: a quick, developer-flavored summary
const profile = {
  role: "Software Engineer",
  focus: ["Backend", "Data", "Cloud"],
  stack: ["Python", "FastAPI", "Java", "AWS"],
  location: ["Veracruz, MX", "Open to remote"]
};

const socials = [
  { label: "GitHub", href: "https://github.com/DvLeu", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-leon-salas-604519243",
    icon: Linkedin,
  },
];

const Str = ({ children }) => (
  <span className="text-primary">&quot;{children}&quot;</span>
);

const formatValue = (value) =>
  Array.isArray(value) ? (
    <>
      [
      {value.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && ", "}
          <Str>{item}</Str>
        </Fragment>
      ))}
      ]
    </>
  ) : (
    <Str>{value}</Str>
  );

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 pt-24 pb-16"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center z-10">
        <div className="md:col-span-7 space-y-6 text-left">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 font-mono text-xs text-primary opacity-0 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Software Engineer at ScaleFlow
          </p>

          <h1 className="font-bold leading-tight opacity-0 animate-fade-in-delay-1">
            <span className="block text-2xl md:text-3xl text-muted-foreground font-medium">
              Hi, I'm
            </span>
            <span className="block text-5xl md:text-7xl text-primary">
              David León Salas
            </span>
          </h1>

          <p className="font-display text-xl md:text-2xl font-medium opacity-0 animate-fade-in-delay-2">
            Backend & Data Automation Engineer
          </p>

          <p className="text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I ship Python APIs, ETL pipelines, and automation systems that
            eliminate manual bottlenecks, now building microservices and cloud
            infrastructure at ScaleFlow Technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="David_Leon_Salas_CV.pdf"
              download="David_Leon_Salas_CV.pdf"
              className="outline-button"
            >
              Download CV
            </a>
            <div className="flex gap-3 ml-1">
              {socials.map(({ label, href, icon }) => {
                const Icon = icon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Decorative summary; hidden on phones to keep the focus on the text */}
        <div className="hidden md:block md:col-span-5 opacity-0 animate-fade-in-delay-3">
          <div className="bg-card rounded-xl shadow-lg border overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 border-b">
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="h-3 w-3 rounded-full bg-primary/40" />
              <span className="h-3 w-3 rounded-full bg-primary/20" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                david.py
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-7 p-6 text-muted-foreground overflow-x-auto">
              <code>
                <span className="text-foreground">david</span> = {"{"}
                {Object.entries(profile).map(([key, value]) => (
                  <div key={key} className="pl-4">
                    <span className="text-foreground">&quot;{key}&quot;</span>:{" "}
                    {formatValue(value)},
                  </div>
                ))}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
