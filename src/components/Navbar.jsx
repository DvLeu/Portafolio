import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Remembers the chosen theme and applies it to the <html> element
const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return [isDarkMode, toggleTheme];
};

const ThemeButton = ({ isDarkMode, onClick }) => {
  const Icon = isDarkMode ? Sun : Moon;
  return (
    <button
      onClick={onClick}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-colors duration-300 hover:bg-primary/20"
    >
      <Icon className="h-5 w-5 text-foreground/80" />
    </button>
  );
};

export const Navbar = () => {
  const [isDarkMode, toggleTheme] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      {item.name}
    </a>
  ));
  const themeButton = (
    <ThemeButton isDarkMode={isDarkMode} onClick={toggleTheme} />
  );

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <img
            src={
              isDarkMode
                ? "/david-python-logo-dark.svg"
                : "/david-python-logo.svg"
            }
            alt="David León Salas logo"
            width={40}
            height={40}
          />
          <span>
            <span className="text-foreground">dvleu</span>.dev
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {links}
          {themeButton}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-xl md:hidden",
            "bg-background/95 backdrop-blur-md transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          {links}
          {themeButton}
        </div>
      </div>
    </nav>
  );
};
