import { personalInfo } from "../constants/data";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="flex justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">
            <span className="font-medium">Email:</span> {personalInfo.email}
          </p>
          <p className="mb-2">
            <span className="font-medium">Phone:</span> {personalInfo.phone}
          </p>
          <p>
            <span className="font-medium">Location:</span> {personalInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
}