import { title } from "process";
import ContactPage from "../components/contact";
import { Navigation } from "../components/nav";
import PrivacyPolicy from "../components/privacyPolicy";

export const metadata = {
  title: "Contact Us | JYT Software", 
  description:
    "Get in touch with JYT Software for web development and digital marketing services. Reach out via our contact form or social media.",
};

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <ContactPage />
    </div>
  );
}
