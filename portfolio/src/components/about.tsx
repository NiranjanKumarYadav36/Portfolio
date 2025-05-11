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
          </div>
        </CardContent>
      </Card>
    </section>
  );
}