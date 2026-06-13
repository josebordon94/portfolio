import { useState } from 'react';
import { translations } from '../i18n';
import type { Locale } from '../i18n';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

export default function App() {
  const [locale, setLocale] = useState<Locale>('es');
  const t = translations[locale];

  return (
    <>
      <Navbar t={t} locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
      </main>
      <footer className="py-8 px-6 border-t border-dark-800">
        <div className="max-w-4xl mx-auto text-center text-dark-500 text-sm font-mono">
          <p>Jose Bordon &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
