
const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop',
      bio: 'Leading creative vision with 8+ years in digital marketing'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
      bio: 'Full-stack developer specializing in modern web technologies'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
      bio: 'Award-winning video producer with expertise in motion graphics'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-diginock-blue to-diginock-purple bg-clip-text text-transparent">DigiNock</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital marketing experts dedicated to helping businesses grow online
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, DigiNock began as a small team with a big vision: to democratize digital marketing 
              and make it accessible to businesses of all sizes. We started with web development and quickly expanded 
              our services to include graphic design and video production.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we're proud to have helped over 150 clients achieve their digital marketing goals through 
              innovative strategies, cutting-edge technology, and personalized service that puts your success first.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gradient-to-r from-diginock-blue to-diginock-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                Innovation
              </div>
              <div className="bg-gradient-to-r from-diginock-purple to-diginock-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                Quality
              </div>
              <div className="bg-gradient-to-r from-diginock-cyan to-diginock-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                Results
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              alt="Team working"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-diginock-orange to-diginock-pink rounded-2xl opacity-80"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-diginock-blue to-diginock-purple bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The creative minds behind DigiNock's success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-diginock-blue/20 to-diginock-purple/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-diginock-blue font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
