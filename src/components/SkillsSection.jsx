import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

// Grouped like the CV; each group carries one line of real-world evidence
const skillGroups = [
  {
    title: "Languages",
    evidence:
      "Python in production at ScaleFlow, NeoDigital and TenarisTamsa; Java microservices at ScaleFlow.",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    evidence:
      "Shipped a production FastAPI + MongoDB REST API serving SAT fiscal catalogs.",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Spring Boot",
      "Spring Cloud",
      "Pydantic",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    evidence:
      "MongoDB & PostgreSQL in production at NeoDigital, backed by 4 MongoDB University badges.",
    skills: ["PostgreSQL", "MongoDB", "Microsoft SQL Server", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    evidence: "AWS, Terraform and Docker for cloud deployments at ScaleFlow.",
    skills: [
      "AWS",
      "Azure",
      "Terraform",
      "Docker",
      "CI/CD",
      "Linux",
      "Shell Scripting",
    ],
  },
  {
    title: "Data & Analytics",
    evidence:
      "Python ETL pipelines that reclaim ~1 hr/day of analyst time at TenarisTamsa.",
    skills: ["ETL Pipelines", "Power BI", "Matplotlib", "Plotly"],
  },
  {
    title: "Frontend & Practices",
    evidence:
      "Delivered an offline-first React + Electron desktop app for Alvasu.",
    skills: [
      "React",
      "Angular",
      "AWS Amplify",
      "Jest",
      "Git/GitHub",
      "Agile/Scrum",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="My"
          highlight="Skills"
          subtitle="The stack I use to ship backend services, data pipelines, and cloud infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ title, evidence, skills }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-left flex flex-col"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{evidence}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
