
import { useState } from 'react';
import { Globe, Image, Video } from 'lucide-react';
import whisperingvalley from '../assests/images/whisperingvalley.png'
import gauravmotors from '../assests/images/gauravmotors.png'
import welcometrade from '../assests/images/welcometrade.png'
import { link } from 'fs';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Whispering Valley Resort',
      category: 'website',
      image: whisperingvalley,
      description: 'Modern e-commerce website with payment integration and inventory management.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://resortr.netlify.app/'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'Complete brand identity including logo, business cards, and marketing materials.',
      tech: ['Adobe Creative Suite', 'Figma'],
      link: '#'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      description: 'Engaging product launch video with motion graphics and professional editing.',
      tech: ['After Effects', 'Premiere Pro'],
      link: '#'
    },
    {
      id: 4,
      title: 'Gaurav Motors',
      category: 'website',
      image: gauravmotors,
      description: 'Responsive restaurant website with online ordering and reservation system.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://gauravmotors.in/'
    },
    {
      id: 5,
      title: 'Welcome Trade',
      category: 'website',
      image: welcometrade,
      description: 'Responsive restaurant website with online ordering and reservation system.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: "https://welcometrade.netlify.app/"
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      description: 'Complete social media campaign with custom graphics and content strategy.',
      tech: ['Photoshop', 'Canva'],
      link: '#'
    },
    {
      id: 7,
      title: 'Corporate Promo Reel',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Professional corporate promotional video showcasing company values and services.',
      tech: ['Cinema 4D', 'Final Cut Pro'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: null },
    { key: 'website', label: 'Websites', icon: Globe },
    { key: 'design', label: 'Design', icon: Image },
    { key: 'video', label: 'Videos', icon: Video }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-diginock-blue to-diginock-purple bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our best work across web development, design, and video production
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.key
                  ? 'bg-gradient-to-r from-diginock-blue to-diginock-purple text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4" />}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <a href={project.link} target='_blank'><button className="bg-gradient-to-r from-diginock-blue to-diginock-purple text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  View Project
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
