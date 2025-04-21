import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default Contact;
