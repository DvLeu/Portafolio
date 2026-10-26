import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

// Headline numbers from the CV, for a quick recruiter scan
const stats = [
  { value: "180×", label: "faster data collection" },
  { value: "5+", label: "data sources unified" },
  { value: "80+", label: "students using my tools" },
];

const education = [
  {
    degree: "M.S. in Data Science (in progress)",
    school: "Universidad Cristóbal Colón",
  },
  {
    degree: "B.S. in Computer Systems Engineering",
    school: "TecNM – Instituto Tecnológico de Veracruz",
  },
];

const focusAreas = [
  {
    title: "Backend Engineering",
    description:
      "Building and maintaining production APIs and microservices with Python, FastAPI, Flask, Java, Spring Boot, and Quarkus, with an emphasis on maintainable architecture and code quality.",
  },
  {
    title: "Data Engineering & Automation",
    description:
      "Developing Python-based ETL pipelines and automation solutions integrating SQL databases, CSV, XML, and Excel data sources, including workflows reduced from 30 minutes to 10 seconds.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Working with AWS, Google Cloud, Docker, Terraform, and GitHub Actions to automate deployments, improve delivery workflows, and support cloud-native applications.",
  },
];

// Emphasizes key terms inside muted paragraphs
const Highlight = ({ children }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader title="About" highlight="Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
                Backend & Data Automation
              </p>
              <h3 className="text-3xl font-semibold">Software Engineer</h3>
            </div>

            <p className="text-muted-foreground">
              I'm a Software Engineer specializing in{" "}
              <Highlight>backend development</Highlight>, with professional
              experience building <Highlight>production APIs</Highlight>,{" "}
              <Highlight>microservices</Highlight>, and automation solutions
              using <Highlight>Python</Highlight> and{" "}
              <Highlight>Java</Highlight>. At{" "}
              <Highlight>ScaleFlow Technologies</Highlight>, I develop
              cloud-native backend services, contribute to software architecture
              decisions, and implement CI/CD workflows using AWS, Google Cloud,
              Docker, Terraform, and GitHub Actions.
            </p>

            <dl className="grid grid-cols-3 gap-4 border-y py-5">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {value}
                  </dt>
                  <dd className="text-xs text-muted-foreground leading-snug">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="space-y-3">
              {education.map(({ degree, school }) => (
                <li key={degree} className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <p className="font-medium">{degree}</p>
                    <p className="text-sm text-muted-foreground">{school}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="David_Leon_Salas_CV.pdf"
                download="David_Leon_Salas_CV.pdf"
                className="outline-button"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {focusAreas.map(({ title, description }) => (
              <div
                key={title}
                className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
              >
                <h4 className="font-semibold text-lg mb-1">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
