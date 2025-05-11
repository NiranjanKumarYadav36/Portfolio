import { personalInfo } from "../constants/data";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-medium">{personalInfo.name}</p>
            <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/NiranjanKumarYadav36"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-kumar-yadav-11b365284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}