import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-20 text-gray-200 bg-zinc-900">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Privacy Policy</h1>
      <p className="text-sm mb-4">Effective Date: January 1st 2022 </p>
      
      <p className="mb-4">
        At JYT Software, your privacy is a priority. This Privacy Policy outlines how we collect, use, and
        protect your personal information when you visit our website or use our services.
      </p>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal information you provide, such as your name, email address, or phone number when contacting us.</li>
        <li>Usage data, including your browser type, device information, and IP address, collected to improve website performance.</li>
      </ul>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To respond to inquiries and provide requested services.</li>
        <li>To improve website functionality and user experience.</li>
        <li>To communicate updates, promotions, or important notices.</li>
      </ul>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">Data Protection</h2>
      <p className="mb-4">
        We implement security measures to protect your personal information. Your data will never be sold, shared, or misused without your consent.
      </p>

      <p className="mt-6 text-sm">
        For questions or concerns about your privacy, please contact us at timothy.roberts@jytsoftware.com. By using our website, you consent to the terms outlined in this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;