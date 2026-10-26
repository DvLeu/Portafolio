import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-12 px-4 py-8 bg-card border-t flex flex-wrap justify-between items-center">
      <div className="text-sm text-muted-foreground text-left">
        <p>
          &copy; {new Date().getFullYear()} David León Salas. All rights
          reserved.
        </p>
        <p className="text-xs">Logo created with ChatGPT by OpenAI.</p>
      </div>
      <a
        href="#hero"
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
