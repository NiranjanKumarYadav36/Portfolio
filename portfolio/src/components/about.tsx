import { personalInfo } from "../constants/data";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{personalInfo.about}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">{personalInfo.phone}</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}