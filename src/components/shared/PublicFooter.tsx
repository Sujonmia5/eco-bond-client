import React from "react";

const PublicFooter = () => {
  return (
    <div className="pb-24">
      <footer className="bg-gray-800 text-white pt-8 pb-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-green-500 font-semibold">Ecobond</span>. All
            Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicFooter;
<footer className="bg-gray-800 text-white py-6 mt-10">
  <div className="container mx-auto text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-gray-400 hover:text-white">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        Terms of Service
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        Contact Us
      </a>
    </div>
  </div>
</footer>;
