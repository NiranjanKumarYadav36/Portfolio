import { projects } from "../constants/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {project.period} • Team: {project.teamSize}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {project.link && (
              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View on GitHub →
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}