import type { TranslationKeys } from "../i18n";

interface SkillsProps {
  t: TranslationKeys;
}

export default function Skills({ t }: SkillsProps) {
  return (
    <section id="skills" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark-50 mb-12 flex items-center gap-4">
          <span className="text-primary-400 font-mono">04.</span>
          {t.skills.title}
          <span className="flex-1 h-px bg-dark-800 ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.skills.categories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-dark-900/50 rounded-lg border border-dark-800 hover:border-primary-500/30 transition-colors"
            >
              <h3 className="text-dark-100 font-semibold mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-dark-800 text-dark-300 text-sm rounded-full font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
