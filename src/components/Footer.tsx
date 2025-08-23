import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                {/* <span className="text-blue-900 font-bold">E++</span> */}
              </div>
              <span className="text-xl font-bold text-white">E++ Company</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering businesses with innovative SaaS solutions for scalable growth and operational excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">API Documentation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Security</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">What's New</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Press Kit</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Partners</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Live Chat</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">System Status</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Report Bug</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Feature Request</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex-1 max-w-md">
              <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-blue-100 text-sm mb-4">Get the latest updates on new features and industry insights.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-900"
                />
                <button className="bg-white text-blue-900 px-6 py-2 rounded-r-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-2">
                <span className="inline-flex items-center text-blue-100 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  SOC 2 Compliant
                </span>
                <span className="inline-flex items-center text-blue-100 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  GDPR Ready
                </span>
              </div>
              <p className="text-blue-100 text-sm">99.9% Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} E++ Company Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Cookie Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
