const Footer = () => {
  return (
    <footer className="footer bg-gray-950 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Company</h3>
          <a href="#about" className="block hover:text-white">About Us</a>
          <a href="#services" className="block hover:text-white">Services</a>
          <a href="#contact" className="block hover:text-white">Contact</a>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <a href="#portfolio" className="block hover:text-white">Portfolio</a>
          <a href="#" className="block hover:text-white">Privacy Policy</a>
          <a href="#" className="block hover:text-white">Terms of Service</a>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Connect</h3>
          <a href="#" className="block hover:text-white">hello@company.com</a>
          <a href="#" className="block hover:text-white">+1 (555) 123-4567</a>
          <a href="#" className="block hover:text-white">Follow Us</a>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
        &copy; 2025 Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
