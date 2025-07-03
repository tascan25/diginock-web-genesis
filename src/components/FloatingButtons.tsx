
import { useState } from 'react';
import { Facebook, Instagram, Youtube, Globe, Contact } from 'lucide-react';

const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'from-blue-600 to-blue-700', label: 'Facebook' },
    { icon: Instagram, href: '#', color: 'from-pink-600 to-purple-600', label: 'Instagram' },
    { icon: Youtube, href: '#', color: 'from-red-600 to-red-700', label: 'YouTube' },
    { icon: Globe, href: '#', color: 'from-green-600 to-green-700', label: 'Website' }
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Social Media Buttons */}
        <div className={`flex flex-col space-y-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-gradient-to-r from-diginock-blue to-diginock-purple rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          title="Social Media"
        >
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </button>

        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="w-14 h-14 bg-gradient-to-r from-diginock-orange to-diginock-pink rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-subtle"
          title="Contact Us"
        >
          <Contact className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
