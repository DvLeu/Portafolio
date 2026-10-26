import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

// Newest first, mirrors LinkedIn
const experiences = [
  {
    role: "Software Engineer",
    company: "ScaleFlow",
    type: "Full-time",
    period: "Aug 2026 – Present",
    location: "Monterrey, NL · Remote",
    highlights: [
      "Develop and maintain backend services and microservices using Python (FastAPI) and Java (Spring Boot, Quarkus), implementing RESTful APIs and application features.",
      "Design and implement CI/CD pipelines with GitHub Actions, automating build and deployment workflows across AWS and Google Cloud.",
      "Support cloud-native infrastructure and deployment workflows using Terraform and Docker across AWS and Google Cloud.",
      "Advocate for standardized architecture documentation and diagramming to speed up technical reviews and system design.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "Quarkus",
      "GitHub Actions",
      "AWS",
      "Google Cloud",
      "Terraform",
      "Docker",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Alvasu",
    type: "Freelance",
    period: "Jun 2026 – Aug 2026",
    location: "Veracruz, Mexico · Remote",
    highlights: [
      "Developed an offline-first desktop application using React, Flask, SQLite, and Electron for internal operations.",
      "Created a cost calculation engine to track ingredient price changes and support profit analysis.",
      "Consolidated ingredient pricing, production logs, and sales records into a single platform.",
    ],
    skills: ["React", "Flask", "SQLite", "Electron"],
  },
  {
    role: "Data Engineer Intern",
    company: "TenarisTamsa",
    type: "Full-time",
    period: "Feb 2026 – Jun 2026",
    location: "Veracruz, Mexico · On-site",
    highlights: [
      "Developed Python ETL pipelines ingesting data from 5+ sources, improving efficiency for the analytics team.",
      "Automated manual downloads with Selenium, significantly reducing processing time for BI dashboards.",
      "Co-built a PowerApps application that streamlined the tube-defect lifecycle management process.",
    ],
    skills: ["Python", "ETL", "Selenium", "Power BI", "PowerApps", "SQL"],
  },
  {
    role: "Python Backend Developer — Research Intern",
    company: "Instituto Tecnológico de Veracruz",
    type: "Internship",
    period: "Dec 2024 – Dec 2025",
    location: "Veracruz, Mexico · Hybrid",
    highlights: [
      "Contributed to an institutional educational-technology research project at ITVER TecNM.",
      "Developed an interactive programming visualization platform and a pseudocode-to-Python translator.",
      "Tools were adopted in live lectures and validated by 80+ first-semester students.",
    ],
    skills: ["Python", "Agile", "Education Tech"],
  },
  {
    role: "Python Backend Developer Intern",
    company: "NeoDigital",
    type: "Freelance",
    period: "Mar 2025 – Oct 2025",
    location: "Veracruz, Mexico · Remote",
    highlights: [
      "Developed and deployed a production-ready FastAPI + MongoDB REST API for SAT fiscal catalogs.",
      "Cut catalog onboarding from hours to seconds through Excel ingestion endpoints.",
      "Implemented Pydantic schema validation to ensure data integrity at the API boundary.",
    ],
    skills: ["Python", "FastAPI", "MongoDB", "Pydantic", "SOLID"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Work"
          highlight="Experience"
          subtitle="My path so far, from research internships to production systems."
        />

        <ol className="relative border-l-2 border-primary/30 ml-2 space-y-10 text-left">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-8">
              <span className="absolute -left-2.25 top-6 h-4 w-4 rounded-full bg-brand ring-4 ring-background" />
              <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium">
                      {job.company} · {job.type}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right shrink-0">
                    <p className="font-mono">{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
