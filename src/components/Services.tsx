
import { Globe, Video, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      gradient: 'from-diginock-blue to-diginock-cyan'
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description: 'Eye-catching visual content including logos, posters, and brand materials that make your business stand out.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      gradient: 'from-diginock-purple to-diginock-pink'
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Engaging video content including reels, promotional videos, and social media content that drives engagement.',
      features: ['Social Media Reels', 'Promotional Videos', 'Motion Graphics', 'Video Editing'],
      gradient: 'from-diginock-cyan to-diginock-orange'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-diginock-blue to-diginock-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
