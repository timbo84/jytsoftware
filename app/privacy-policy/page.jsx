import { Navigation } from "../components/nav";
import PrivacyPolicy from "../components/privacyPolicy";

export default function AboutPage() {

  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <PrivacyPolicy />
    </div>
  );
}