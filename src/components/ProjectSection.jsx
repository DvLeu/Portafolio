import { ArrowRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

const projects = [
  {
    title: "HealthMed",
    description:
      "Medical diagnosis REST API combining rule-based filtering and KNN scoring to return a ranked Top-5 differential diagnosis from patient inputs (age, gender, BMI, symptoms), with full session logging for accuracy analysis.",
    image: "/projects/HealthMed.png",
    tags: ["Python", "FastAPI", "KNN", "Machine Learning", "REST API"],
    githubUrl: "https://github.com/DvLeu/HealthMed",
  },
  {
    title: "RustParser",
    description:
      "Custom Rust code analyzer built with a compiler front-end. Implements lexical analysis and parsing using JavaCC to validate Rust syntax and generate abstract syntax trees.",
    image: "/projects/RustCompiler.png",
    tags: ["Java", "JavaCC", "Compiler Design", "Rust", "ANTLR"],
    githubUrl: "https://github.com/DvLeu/RustCodeAnalyzer",
  },
  {
    title: "Web Portfolio",
    description:
      "Interactive personal portfolio showcasing projects and skills with dark/light theme support. Built with modern React patterns and responsive Tailwind CSS for optimal UX across all devices.",
    image: "/projects/Portafolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    githubUrl: "https://github.com/DvLeu/Portafolio",
  },
  {
    title: "Cineteca-Digital (Digital Cinematheque)",
    description:
      "Digital Cinematheque built with Angular for the frontend and Python with Flask for the backend, connected to a Cassandra database and containerized with Docker for flexibility and scalability.",
    image: "/projects/Cineteca.png",
    tags: ["Python", "Flask", "TypeScript", "Angular", "Cassandra", "Docker"],
    githubUrl: "https://github.com/DvLeu/CinetecaDigital",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="Featured"
          highlight="Projects"
          subtitle="Selected work, from production APIs to a compiler front-end."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="inline-block text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={30} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DvLeu"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
