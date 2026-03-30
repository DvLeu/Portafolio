import { Airplay, Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer
            </h3>

            <p className="text-muted-foreground">
                I’m a backend-focused developer passionate about building APIs, 
                automating workflows, and creating practical software solutions.
            </p>

            <p className="text-muted-foreground">
                My work includes backend development, database integration, 
                and process automation with Python, SQL, and modern tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="Dvleu-CV.pdf" download="Dvleu-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Python Development</h4>
                  <p className="text-muted-foreground">
                    Building backend services and REST API's with Python with clean and scalable principles
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Airplay className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Databases & Data</h4>
                  <p className="text-muted-foreground">
                    Experience with SQL and NoSQL databases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Adaptability</h4>
                  <p className="text-muted-foreground">
                    Improving workflows through scripting, reporting, and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};