import { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [showProjects, setShowProjects] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use the translation hook

  const skills = ["JavaScript", "React", "Tailwind CSS"];
  const tools = ["VSCode", "Figma", "Git"];
  const projects = [
    {
      name: "Puskesmasin",
      date: t("projects.date"),
      description: t('projects.desc'),
      tech: ["laravel", "bootstrap"],
      img: "/images/puskesmasin.png",
      link: "https://github.com/YasrifalFawaz/Puskesmasin"
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-extrabold tracking-wide">{t('navbar.title')}</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <div className="space-x-6 font-medium">
              <a href="#home" className="hover:text-yellow-300 transition duration-300">{t('navbar.home')}</a>
              <a href="#about" className="hover:text-yellow-300 transition duration-300">{t('navbar.about')}</a>
              <a href="#projects" className="hover:text-yellow-300 transition duration-300">{t('navbar.projects')}</a>
              <a href="#contact" className="hover:text-yellow-300 transition duration-300">{t('navbar.contact')}</a>
            </div>
            <div className="ml-6">
              <button 
                onClick={() => i18n.changeLanguage('id')} 
                className={`px-2 py-1 rounded ${i18n.language === 'id' ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                ID
              </button>
              <span className="mx-1">|</span>
              <button 
                onClick={() => i18n.changeLanguage('en')} 
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-6 py-3">
            <div className="flex flex-col space-y-3 pb-3">
              <a href="#home" className="hover:text-yellow-300 transition duration-300" onClick={() => setMobileMenuOpen(false)}>{t('navbar.home')}</a>
              <a href="#about" className="hover:text-yellow-300 transition duration-300" onClick={() => setMobileMenuOpen(false)}>{t('navbar.about')}</a>
              <a href="#projects" className="hover:text-yellow-300 transition duration-300" onClick={() => setMobileMenuOpen(false)}>{t('navbar.projects')}</a>
              <a href="#contact" className="hover:text-yellow-300 transition duration-300" onClick={() => setMobileMenuOpen(false)}>{t('navbar.contact')}</a>
            </div>
            <div className="pt-2 border-t border-indigo-500 mt-2">
              <button 
                onClick={() => i18n.changeLanguage('id')} 
                className={`px-2 py-1 rounded ${i18n.language === 'id' ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                ID
              </button>
              <span className="mx-1">|</span>
              <button 
                onClick={() => i18n.changeLanguage('en')} 
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Home */}
      <section id="home" className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 flex flex-col items-center justify-center text-center px-4 py-20">
        <img src="/images/fotoprofil.jpg" alt="Profile" className="rounded-full w-28 h-28 md:w-40 md:h-40 border-4 border-white shadow-lg mb-6" />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{t('home.greeting')}</h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-md px-2">{t('home.desc')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 px-2">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-5 py-2 rounded-full transition duration-300" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>{t('home.aboutBtn')}</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-5 py-2 rounded-full transition duration-300" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>{t('home.projectsBtn')}</button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 md:px-5 py-2 rounded-full transition duration-300" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>{t('home.contactBtn')}</button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 md:px-8 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('about.title')}</h2>
          <p className="text-center text-base md:text-lg mb-8 px-2">{t('about.desc')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="px-2">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{t('about.skills')}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-indigo-100 text-indigo-700 px-3 md:px-4 py-1 md:py-2 rounded-full shadow-sm text-sm md:text-base">{skill}</span>
                ))}
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{t('about.tools')}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tools.map((tool, index) => (
                  <span key={index} className="bg-pink-100 text-pink-700 px-3 md:px-4 py-1 md:py-2 rounded-full shadow-sm text-sm md:text-base">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
            <h2 className="text-3xl md:text-4xl font-bold">{t('projects.title')}</h2>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300 w-full md:w-auto" onClick={() => setShowProjects(!showProjects)}>
              {showProjects ? t('projects.hide') : t('projects.show')}
            </button>
          </div>
          {showProjects ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white border rounded-xl shadow-md p-4 md:p-5 hover:shadow-xl transition">
                  <img src={project.img} alt={project.name} className="mb-4 rounded-lg w-full h-40 md:h-48 object-cover" />
                  <h3 className="text-xl md:text-2xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                  <p className="mb-3 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs md:text-sm">{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline text-sm md:text-base">{t('projects.viewGitHub')}</a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">{t('projects.hidden')}</p>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-white text-gray-800">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
          <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
            <li><strong>{t('contact.email')}:</strong> yasrifalf@gmail.com</li>
            <li><strong>{t('contact.phone')}:</strong> 0822-1179-7115</li>
            <li><strong>{t('contact.github')}:</strong> github.com/YasrifalFawaz</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-4 text-center text-sm md:text-base px-4">
        <p>© 2025 - 152023024 - Yasrifal Fawaz</p>
      </footer>
    </>
  );
}

export default App;