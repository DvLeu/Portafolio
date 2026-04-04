import { useState } from "react";
import { cn } from "../lib/utils";
import {
  FileCodeCorner,
  Database,
  Github,
  Container,
  Terminal,
  Brain,
  Zap,
  Square,
  Cloud,
  BarChart,
  Server,
} from "lucide-react";

const skillIcons = {
  "HTML/CSS": FileCodeCorner,
  JavaScript: FileCodeCorner,
  TypeScript: FileCodeCorner,
  Angular: Square,
  React: Zap,
  Python: FileCodeCorner,
  "C/C++": FileCodeCorner,
  Rust: Zap,
  Java: FileCodeCorner,
  MongoDB: Database,
  PostgreSQL: Database,
  "MySQL/MariaDB": Database,
  "Microsoft SQL Server": Database,
  "Git/Github": Github,
  Azure: Cloud,
  PowerBi: BarChart,
  Docker: Container,
  Kubernetes: Server,
  "Linux Systems": Terminal,
  BashScripting: Terminal,
};

const skills = [
  { name: "HTML/CSS", category: "frontend", level: "Intermediate" },
  { name: "JavaScript", category: "frontend", level: "Intermediate" },
  { name: "TypeScript", category: "frontend", level: "Intermediate" },
  { name: "Angular", category: "frontend", level: "Intermediate" },
  { name: "React", category: "frontend", level: "Intermediate" },

  { name: "Python", category: "backend", level: "Advanced" },
  { name: "C/C++", category: "backend", level: "Intermediate" },
  { name: "Rust", category: "backend", level: "Beginner" },
  { name: "Java", category: "backend", level: "Intermediate" },
  { name: "MongoDB", category: "backend", level: "Intermediate" },
  { name: "PostgreSQL", category: "backend", level: "Advanced" },
  { name: "MySQL/MariaDB", category: "backend", level: "Advanced" },
  { name: "Microsoft SQL Server", category: "backend", level: "Advanced" },

  { name: "Git/Github", category: "tools", level: "Expert" },
  { name: "Azure", category: "tools", level: "Intermediate" },
  { name: "PowerBi", category: "tools", level: "Intermediate" },
  { name: "Docker", category: "tools", level: "Advanced" },
  { name: "Kubernetes", category: "tools", level: "Intermediate" },
  { name: "Linux Systems", category: "tools", level: "Advanced" },
  { name: "BashScripting", category: "tools", level: "Advanced" },
];
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const IconComponent = skillIcons[skill.name];
            return (
              <div
                key={key}
                className="bg-card p-6 shadow-xs card-hover flex flex-col items-center justify-center"
              >
                {IconComponent && (
                  <IconComponent className="w-8 h-8 mb-3 text-primary" />
                )}
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-xs text-primary font-medium mt-1 display block">
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
