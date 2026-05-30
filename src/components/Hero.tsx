import type { TranslationKeys } from '../i18n';

interface HeroProps {
  t: TranslationKeys;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <p className="text-primary-400 font-mono text-sm mb-4">{t.hero.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-bold text-dark-50 mb-4">Jose Bordon</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-dark-300 mb-6">{t.hero.role}</h2>
        <p className="text-dark-400 text-lg max-w-2xl mb-8 leading-relaxed">{t.hero.description}</p>
        <a
          href="#experience"
          className="inline-block px-6 py-3 border border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500/10 transition-colors font-mono text-sm"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
