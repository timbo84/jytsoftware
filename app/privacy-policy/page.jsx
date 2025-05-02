import { Navigation } from "../components/nav";
import PrivacyPolicy from "../components/privacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for our JYT Software website",
};



export default function AboutPage() {

  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <PrivacyPolicy />
    </div>
  );
}