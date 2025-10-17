import React, {useState} from 'react';
import mobileAppImg from '../assets/mobile-app.png';
import videoEditingImg from '../assets/video-editing.png';
import desktopAppImg from '../assets/desktop-app.png';
import programmingImg from '../assets/programming.png';
import AnimatedElements from './embeded/3dAnimation';
import AnimatedElement from './embeded/AnimatedSection';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Mobile App');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dating Mobile App Design",
      description: "A modern dating mobile application designed with user experience and engagement in mind. This app features advanced matching algorithms, real-time messaging, and a sleek, intuitive interface. Built with React Native and Firebase backend, it supports both iOS and Android platforms with native performance...",
      fullDescription: "A modern dating mobile application designed with user experience and engagement in mind. This app features advanced matching algorithms, real-time messaging, and a sleek, intuitive interface. Built with React Native and Firebase backend, it supports both iOS and Android platforms with native performance.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      features: ["Real-time Chat", "Smart Matching", "Video Profiles", "Location-based Discovery"],
      liveLink: "https://dating-app-demo.com",
      githubLink: "https://github.com/username/dating-app",
      image: videoEditingImg,
      image: mobileAppImg,
      category: "Mobile App"
    },
    {
      id: 1,
      title: "E Commerce Mobile App Design",
      description: "A comprehensive fitness tracking desktop application that helps users monitor their workouts, nutrition, and progress. Includes workout planning, progress analytics, and integration with wearable devices...",
      fullDescription: "A comprehensive fitness tracking desktop application that helps users monitor their workouts, nutrition, and progress. Includes workout planning, progress analytics, and integration with wearable devices.",
      technologies: ["Electron", "React", "SQLite", "Chart.js"],
      features: ["Workout Tracking", "Progress Analytics", "Meal Planning", "Device Integration"],
      liveLink: "https://fitness-app-demo.com",
      githubLink: "https://github.com/username/fitness-app",
      image: videoEditingImg,
      category: "Website"
    },
    {
      id: 1,
      title: "Fitness Mobile App Design",
      description: "A stunning portfolio website for fashion models featuring high-resolution galleries, booking system, and professional contact management. Designed with performance and visual appeal as top priorities...",
      image: desktopAppImg,
      fullDescription: "A stunning portfolio website for fashion models featuring high-resolution galleries, booking system, and professional contact management. Designed with performance and visual appeal as top priorities.",
      technologies: ["Vue.js", "Nuxt.js", "Cloudinary", "Netlify"],
      features: ["Image Galleries", "Booking System", "Contact Management", "SEO Optimized"],
      liveLink: "https://model-portfolio-demo.com",
      githubLink: "https://github.com/username/model-portfolio",
      category: "Desktop"
    },
    {
      id: 2,
      title: "Social Mobile App Design",
      description: "A social media application focusing on community engagement and content sharing. Features include post creation, commenting, liking, real-time notifications, and user profiles...",
      fullDescription: "A social media application focusing on community engagement and content sharing. Features include post creation, commenting, liking, real-time notifications, and user profiles.",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      features: ["Post Creation", "Real-time Chat", "Notifications", "User Profiles"],
      liveLink: "https://social-app-demo.com",
      githubLink: "https://github.com/username/social-app",
      image: desktopAppImg,
      category: "Mobile App"
    },
    {
      id: 2,
      title: "Business Management Desktop App",
      description: "Enterprise-level business management software for small to medium businesses. Includes inventory management, customer relationship management, invoicing, and reporting features...",
      fullDescription: "Enterprise-level business management software for small to medium businesses. Includes inventory management, customer relationship management, invoicing, and reporting features.",
      image: desktopAppImg,
      category: "Desktop",
      technologies: [".NET", "WPF", "SQL Server", "Entity Framework"],
      features: ["Inventory Management", "CRM", "Invoicing", "Analytics"],
      liveLink: "https://business-app-demo.com",
      githubLink: "https://github.com/username/business-app"
    },
    {
      id: 1,
      title: "Modelling Mobile App Design",
      description: "A social media application focusing on community engagement and content sharing. Features include post creation, commenting, liking, real-time notifications, and user profiles...",
      fullDescription: "A social media application focusing on community engagement and content sharing. Features include post creation, commenting, liking, real-time notifications, and user profiles.",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      features: ["Post Creation", "Real-time Chat", "Notifications", "User Profiles"],
      liveLink: "https://social-app-demo.com",
      githubLink: "https://github.com/username/social-app",
      image: programmingImg,
      category: "Other Projects"
    },
    {
      id: 2,
      title: "Open Source Library",
      description: "A comprehensive open-source utility library for JavaScript developers. Includes commonly used functions, helpers, and components to accelerate web development projects...",
      fullDescription: "A comprehensive open-source utility library for JavaScript developers. Includes commonly used functions, helpers, and components to accelerate web development projects.",
      image: programmingImg,
      category: "Other Projects",
      technologies: ["TypeScript", "Jest", "Webpack", "NPM"],
      features: ["Utility Functions", "React Components", "Testing Suite", "Full Documentation"],
      liveLink: "https://opensource-library-demo.com",
      githubLink: "https://github.com/username/utility-library"
    }
  ];

  const categories = ["Mobile App", "Website", "Desktop", "Other Projects"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

    const handleCategoryClick = (category, e) => {
      e.preventDefault();
      setActiveCategory(category);
    };

    const handleLearnMore = (project) => {
      setSelectedProject(project);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
      setSelectedProject(null);
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

  return (
    <section id="portfolio" className="pad container">
      <div className="portfolio">

        <AnimatedElements>
          <h2 className="section-title">PORTFOLIO</h2>
        </AnimatedElements>
        
        <AnimatedElement className='portfolio-categories' animation="fadeInLeft" delay={0.6}>
          {categories.map(category => (
              <a 
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                href=''
                onClick={(e) => handleCategoryClick(category, e)}
              >
                {category}
              </a>
            ))}
        </AnimatedElement>

        <div className="projects-container">
           {filteredProjects.map(project => (
            <div key={project.id} className="project-flex">
              <AnimatedElements className='project-image' delay={0.6} duration={0.9} threshold={0.1}>
                <img className='picture' src={project.image} alt={project.title} />
              </AnimatedElements>

              <AnimatedElement className='project-details' animation="fadeInLeft" delay={0.6}>
                <h3>PROJECT {project.id}</h3>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <button className="learn-more-btn"
                 onClick={() => handleLearnMore(project)}>
                    &gt; learn more
                </button>
              </AnimatedElement>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              
              <div className="modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="project-links">
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-btn">
                    Live Demo
                  </a>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="modal-body">
                <div className="project-image-full">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="project-info">
                  <div className="info-section">
                    <h3>Project Overview</h3>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  <div className="info-grid">
                    <div className="info-column">
                      <h4>Technologies Used</h4>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <hr />

                    <div className="info-column">
                      <h4>Key Features</h4>
                      <ul className="features-list">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;