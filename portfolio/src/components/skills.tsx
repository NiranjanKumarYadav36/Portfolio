import { skills, certifications } from "../constants/data";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index}>
                <h3 className="font-medium">{cert.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}