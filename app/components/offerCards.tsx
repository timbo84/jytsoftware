import React from "react";

const offers = [
  {
    title: "Portfolio Website",
    oldPrice: "$599",
    newPrice: "$199",
    details: "And Get a FREE Logo Design!",
    description:
      "May include (but not limited to): Personalized design consultation, Responsive and mobile-friendly layout, SEO-optimized portfolio pages, Integration with social media platforms, Basic analytics setup.",
    href: "mailto:timothy.roberts@jytsoftware.com?subject=Portfolio%20Website%20Inquiry",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Basic Website",
    oldPrice: "$999",
    newPrice: "$299",
    details: "And Get Your First Month Of Maintenance FREE!",
    description:
      "May include (but not limited to): User-friendly content management system (CMS), SSL certificate for enhanced security, Custom email setup with your domain, Basic on-page SEO, Initial content setup.",
    href: "mailto:timothy.roberts@jytsoftware.com?subject=Basic%20Website%20Inquiry",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    title: "Custom Website",
    oldPrice: "$1499",
    newPrice: "$699",
    details: "Includes Your First Month Of Maintenance FREE!",
    description:
      "May include (but not limited to): Tailored user experience design, Advanced interactivity and animations, E-commerce integration, Custom blog design and setup.",
    href: "mailto:timothy.roberts@jytsoftware.com?subject=Custom%20Website%20Inquiry",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Premium Website",
    oldPrice: "$1999",
    newPrice: "$999",
    details: "Plus, Get a FREE SEO Audit!",
    description:
      "May include (but not limited to): Premium design, Advanced SEO optimization, Comprehensive analytics and reporting, Custom API integrations, Priority support and maintenance.",
    href: "mailto:timothy.roberts@jytsoftware.com?subject=Premium%20Website%20Inquiry",
    gradient: "from-red-500 to-yellow-500",
  },
  {
    title: "Business Website",
    oldPrice: "$9,999",
    newPrice: "$4,999",
    details: "Get 24/7 Support for the First Month FREE!",
    description:
      "May include (but not limited to): Business design, 24/7 support, Custom database solutions, In-depth market research and competitive analysis, Custom CRM integration, Full branding package (logo, business cards, letterheads).",
    href: "mailto:timothy.roberts@jytsoftware.com?subject=Business%20Website%20Inquiry",
    gradient: "from-orange-500 to-red-500",
  },
];

const OfferGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
      {offers.map((offer, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
          <a
            href={offer.href}
            className={`card flex flex-col items-center text-center p-4 bg-gradient-to-r ${offer.gradient} p-2 rounded-lg shadow-lg`}
          >
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              <span className="text-xl line-through">{offer.oldPrice}</span> {offer.newPrice}
            </h3>
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-black">
              for a {offer.title}!
            </h3>
            <p className="text-xs md:text-sm lg:text-lg font-semibold text-black">
              {offer.details}
            </p>
            <p className="text-xs text-white">
              <u>{offer.description}</u>
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default OfferGrid;
