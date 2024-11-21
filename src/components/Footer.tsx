import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Company Name */}
          <div className="flex justify-center items-center mb-4 space-x-2">
          <img
            src={Logo}
            alt="RoomieHQ Logo"
            className="w-8 h-8 rounded-sm" // Adjust width and height as needed
          />
            <h2 className="text-xl font-bold">RoomieHQ</h2>
          </div>

          {/* Email and Social Media Links */}
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <p className="text-center md:text-left mb-4 md:mb-0">
              Contact us: <a href="mailto:roomiehq@gmail.com" className="text-purple-600 hover:text-purple-700">roomiehq@gmail.com</a>
            </p>
            <div className="flex space-x-4 md:ml-6">
              <a href="https://www.tiktok.com/@roomiehq" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition">
                <FaTiktok size={24} />
              </a>
              <a href="https://www.instagram.com/roomiehq" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/roomiehq" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 border-t border-gray-200 pt-4 flex justify-center md:justify-between">
          <div className="text-center md:text-left">
            <a href="/privacy-policy" className="text-gray-700 hover:text-purple-600 mx-2">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-700 hover:text-purple-600 mx-2">Terms of Service</a>
            <a href="/about" className="text-gray-700 hover:text-purple-600 mx-2">About Us</a>
          </div>
          <p className="mt-4 md:mt-0 text-center text-gray-500">&copy; 2024 RoomieHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
