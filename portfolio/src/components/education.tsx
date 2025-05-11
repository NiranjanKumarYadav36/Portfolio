import { education } from "../constants/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

export default function Education() {
  return (
    <section id="education" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{edu.institution}</CardTitle>
              <CardDescription>
                {edu.period} • {edu.degree}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{edu.score}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}