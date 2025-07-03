
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-r from-diginock-blue/10 via-diginock-purple/10 to-diginock-cyan/10 animate-gradient-shift bg-300%"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-diginock-blue to-diginock-purple rounded-full opacity-20 animate-bounce-subtle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-diginock-purple to-diginock-pink rounded-full opacity-20 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-diginock-cyan to-diginock-blue rounded-full opacity-20 animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Marketing
            <br />
            <span className="bg-gradient-to-r from-diginock-blue via-diginock-purple to-diginock-cyan bg-clip-text text-transparent animate-gradient-shift bg-300%">
              That Converts
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your brand with cutting-edge digital strategies. We create stunning websites, 
            engaging content, and data-driven campaigns that deliver real results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-diginock-blue to-diginock-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white text-diginock-blue border-2 border-diginock-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-diginock-blue hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-diginock-blue mb-1">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-diginock-purple mb-1">150+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-diginock-cyan mb-1">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-diginock-pink mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-diginock-blue transition-colors duration-300 animate-bounce-subtle"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
