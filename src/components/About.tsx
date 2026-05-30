import type { TranslationKeys } from '../i18n';

interface AboutProps {
  t: TranslationKeys;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark-50 mb-12 flex items-center gap-4">
          <span className="text-primary-400 font-mono">01.</span>
          {t.about.title}
          <span className="flex-1 h-px bg-dark-800 ml-4"></span>
        </h2>
        <div className="space-y-4 text-dark-300 leading-relaxed">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-dark-900/50 rounded-lg border border-dark-800">
            <h3 className="text-dark-100 font-semibold mb-2">{t.about.education}</h3>
            <p className="text-dark-400 text-sm">{t.about.university}</p>
          </div>
          <div className="p-6 bg-dark-900/50 rounded-lg border border-dark-800">
            <h3 className="text-dark-100 font-semibold mb-2">{t.about.languages}</h3>
            <p className="text-dark-400 text-sm">{t.about.languagesList}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
