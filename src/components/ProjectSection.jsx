import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HealthMed",
    description: "Medical diagnosis API that processes patient symptoms using rule-based AI and machine learning to suggest probable diagnoses. Features intelligent symptom matching and confidence scoring.",
    image: "/projects/HealthMed.png",
    tags: ["Python", "Flask/FastAPI", "Machine Learning", "Data Science", "SQLAlchemy"],
    githubUrl: "https://github.com/DvLeu/HealthMed",
  },
  {
    id: 2,
    title: "RustParser",
    description: "Custom Rust code analyzer built with a compiler front-end. Implements lexical analysis and parsing using JavaCC to validate Rust syntax and generate abstract syntax trees.",
    image: "/projects/RustCompiler.png",
    tags: ["Java", "JavaCC", "Compiler Design", "Rust", "ANTLR"],
    githubUrl: "https://github.com/DvLeu/RustCodeAnalyzer",
  },
  {
    id: 3,
    title: "Web Portfolio",
    description: "Interactive personal portfolio showcasing projects and skills with dark/light theme support. Built with modern React patterns and responsive Tailwind CSS for optimal UX across all devices.",
    image: "/projects/Portafolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    githubUrl: "https://github.com/DvLeu/Portafolio",
  },
    {
    id: 4,
    title: "Cineteca-Digital (Digital Cinematheque)",
    description: "Digital Cinematheque built with Angular for the frontend and Python with Flask for the backend, connected to a Cassandra database and containerized with Docker for flexibility and scalability.",
    image: "/projects/Cineteca.png",
    tags: ["Python","Flask" ,"JavaScript","TypeScript" ,"Angular", "CSS", "HTML","Docker"],
    githubUrl: "https://github.com/DvLeu/CinetecaDigital",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
      </div>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my projects during my carrer.
      </p>

      <div className="grid grid-cols-1 mid:grid-cold-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-1 py-1 text-xs border font-medium rounded-full bg-primary/10 text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
          href="https://github.com/DvLeu"
        >
          Check My Github <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
