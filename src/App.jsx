import { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} i18n={i18n} />
      <Home />

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

      <Contact />
      <Footer />
    </>
  );
}

export default App;