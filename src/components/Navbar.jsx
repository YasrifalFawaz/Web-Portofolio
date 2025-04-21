import { useTranslation } from 'react-i18next';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, i18n }) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-extrabold tracking-wide">{t('navbar.title')}</a>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-6">
          {["home", "about", "projects", "contact"].map(item => (
            <a key={item} href={`#${item}`} className="hover:text-yellow-300 transition duration-300">{t(`navbar.${item}`)}</a>
          ))}
          <div className="ml-6">
            {["id", "en"].map(lang => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`px-2 py-1 rounded ${i18n.language === lang ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 px-6 py-3">
          {["home", "about", "projects", "contact"].map(item => (
            <a key={item} href={`#${item}`} className="block py-1 hover:text-yellow-300"
              onClick={() => setMobileMenuOpen(false)}>{t(`navbar.${item}`)}</a>
          ))}
          <div className="pt-2 border-t border-indigo-500 mt-2">
            {["id", "en"].map(lang => (
              <button
                key={lang}
                onClick={() => i18n.changeLanguage(lang)}
                className={`px-2 py-1 rounded ${i18n.language === lang ? 'bg-yellow-300 text-indigo-800' : ''}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
