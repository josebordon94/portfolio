import { useState, useEffect } from 'react';
import type { TranslationKeys } from '../i18n';

interface NavbarProps {
  t: TranslationKeys;
  locale: string;
  onLocaleChange: (locale: string) => void;
}

export default function Navbar({ t, locale, onLocaleChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/80 backdrop-blur-md border-b border-dark-800' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary-400">
          JB
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-dark-300 hover:text-dark-100 transition-colors text-sm">
              {t.nav.about}
            </a>
            <a href="#experience" className="text-dark-300 hover:text-dark-100 transition-colors text-sm">
              {t.nav.experience}
            </a>
            <a href="#skills" className="text-dark-300 hover:text-dark-100 transition-colors text-sm">
              {t.nav.skills}
            </a>
          </div>
          <div className="flex items-center gap-1 bg-dark-900 rounded-lg p-1">
            <button
              onClick={() => onLocaleChange('es')}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                locale === 'es' ? 'bg-primary-600 text-white' : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => onLocaleChange('en')}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                locale === 'en' ? 'bg-primary-600 text-white' : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
