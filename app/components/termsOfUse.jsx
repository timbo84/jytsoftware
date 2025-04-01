import React from "react";

const TermsOfUse = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto mt-20 text-gray-200 bg-zinc-900">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Terms of Use</h1>
      <p className="text-sm mb-4">Effective Date: January 1st 2022 </p>
      
      <p className="mb-4">
        Welcome to JYT Software! By accessing or using our website, you agree to comply with the following Terms of Use:
      </p>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">Use of Website</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You may access and use our website for informational or personal purposes only.</li>
        <li>Unauthorized use of our content, including replication or distribution, is prohibited.</li>
      </ul>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">User Responsibilities</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You agree to provide accurate information when using forms or contacting us.</li>
        <li>You may not use our website for illegal or harmful activities.</li>
      </ul>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">Limitation of Liability</h2>
      <p className="mb-4">
        JYT Software is not responsible for any damages resulting from the use of our website or services.
      </p>
      
      <h2 className="text-lg font-semibold mb-2 text-yellow-400">Intellectual Property</h2>
      <p className="mb-4">
        All content, including text, images, and code, is the property of JYT Software and may not be used without prior authorization.
      </p>

      <p className="mt-6 text-sm">
        We reserve the right to modify these terms at any time. If you have questions, please contact us at timothy.roberts@jytsoftware.com.
      </p>
    </div>
  );
};

export default TermsOfUse;