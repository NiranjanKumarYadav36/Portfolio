import { achievements } from "../constants/data";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{achievement}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}