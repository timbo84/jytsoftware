import AboutPage from "../components/about";
import { Navigation } from "../components/nav";

export const metadata = {
  title: "About Us | JYT Software",
  description:
    "Learn about JYT Software, a web development and digital marketing company. Discover our mission, values, and the team behind our innovative solutions.",
};

export default function Page() {
  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <AboutPage />
    </div>
  );
}
