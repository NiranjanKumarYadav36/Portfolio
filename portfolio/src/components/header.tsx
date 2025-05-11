import { personalInfo } from "../constants/data";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useEffect, useState } from "react";

export default function Header() {
    const { setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState("");

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className="font-bold">{personalInfo.name}</span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${activeSection === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Dark Mode Toggle */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="hidden md:flex"
                                onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}
                            >
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>

                        </DropdownMenuTrigger>
                    </DropdownMenu>

                    {/* Mobile Navigation Button */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col w-64">
                            <div className="flex flex-col gap-6 mt-8 flex-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`text-lg font-medium ml-4 transition-colors ${activeSection === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-primary"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/* Dark Mode Toggle for Mobile */}
                            <div className="mb-8">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full"
                                            onClick={() => setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark")}
                                        >
                                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
                                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                </DropdownMenu>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}