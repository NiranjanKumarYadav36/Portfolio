import { experience } from "../constants/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{exp.role}</CardTitle>
              <CardDescription>
                {exp.company} • {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}