import { Navigation } from "../components/nav";
import TermsOfUse from "../components/termsOfUse";

export default function AboutPage() {

  return (
    <div className="relative pb-16">
      {/* Navigation */}
      <Navigation />

      <TermsOfUse />
    </div>
  );
}