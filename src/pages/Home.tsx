import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Our SaaS Platform</h1>
      <p className="mt-3 text-xl text-gray-600">
        Discover how our powerful tools can streamline your workflow and boost productivity.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 1</h2>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 2</h2>
          <p className="mt-2 text-gray-500">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Feature 3</h2>
          <p className="mt-2 text-gray-500">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;