import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="text-lg text-center">
        <p>Have questions about our SaaS product? We'd love to hear from you!</p>
        <p className="mt-4">Email: support@your-saas-company.com</p>
        <p>Phone: (555) 123-4567</p>
        <p className="mt-4">Address: 123 SaaS Avenue, Suite 456, Innovation City, CA 90210</p>
        <p className="mt-4">Follow us on social media!</p>
        {/* Add social media links here */}
      </div>
    </main>
  );
};

export default Contact;