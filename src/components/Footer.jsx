import React from "react";

const Footer = () => {
  return (
    <footer id="connect" className="bg-gray-800 text-gray-300 font-nunito">
  <div className="max-w-6xl mx-auto ml-35 px-6 py-12 flex flex-col sm:flex-row gap-10 text-center sm:text-left">

    {/* Brand / Logo */}
    <div className="flex-1 flex flex-col items-center sm:items-start">
      <h2 className="text-lg font-bold text-white">PawConnect</h2>
      <p className="mt-4 text-sm italic text-gray-400 text-center sm:text-left">
  “Every paw deserves a place to call home.”
</p>
<p className="mt-1 text-xs text-gray-500 uppercase tracking-wider">
  Connecting paws & hearts worldwide
</p>


    </div>

    {/* Mission */}
    <div className="flex-1 flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold text-white">Our Mission</h3>
      <p className="mt-3 text-sm text-gray-400 leading-relaxed">
        We aim to connect pets with loving families and make adoption simple,
        transparent, and full of hope.
      </p>
    </div>

    {/* Contact */}
    <div className="flex-1 flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold text-white">Contact us</h3>
      <ul className="mt-3 space-y-2">
        <li>
          <a href="mailto:support-team@pawconnect.com" className="hover:text-teal-400 mt-3 text-sm text-gray-400 transition-colors duration-200">
            suport-team@pawconnect.com
          </a>
        </li>
        <li>
          <span className="text-gray-500">© 2025 PawConnect</span>
        </li>
      </ul>
    </div>

  </div>

  {/* Bottom strip */}
  <div className="border-t border-gray-700 mt-2 py-4 text-center text-sm text-gray-500 max-w-6xl mx-auto px-6">
    Made with ❤️ for pet lovers
  </div>
</footer>

  );
};

export default Footer;
