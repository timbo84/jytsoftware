import { Navigation } from "../components/nav";
import TermsOfUse from "../components/termsOfUse";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for our JYT Software website",
};

export default function AboutPage() {

  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <TermsOfUse />
    </div>
  );
}