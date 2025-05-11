import { Button } from "./ui/button";
import { personalInfo } from "../constants/data";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          {personalInfo.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-8">
          {personalInfo.about}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
}