import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default Home;
