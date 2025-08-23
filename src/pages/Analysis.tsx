import React from 'react';

const Analysis: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Analysis Page</h1>
      <section className="text-lg text-gray-700 max-w-prose text-center">
        <p className="mb-4">
          Gain deep insights into your data with our powerful analysis tools.
          Understand user behavior, track key metrics, and make data-driven decisions
          to grow your business.
        </p>
        <p>
          Our SaaS platform provides comprehensive analytics dashboards, custom reporting options,
          and real-time data visualization to help you unlock the full potential of your information.
        </p>
      </section>
    </main>
  );
};

export default Analysis;