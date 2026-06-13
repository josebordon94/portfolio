import type { TranslationKeys } from "../i18n";

interface ExperienceProps {
  t: TranslationKeys;
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <section id="experience" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark-50 mb-12 flex items-center gap-4">
          <span className="text-primary-400 font-mono">02.</span>
          {t.experience.title}
          <span className="flex-1 h-px bg-dark-800 ml-4"></span>
        </h2>
        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-dark-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950"></div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-dark-100">
                  {job.role}
                </h3>
                <p className="text-primary-400 font-mono text-sm">
                  {job.company}
                </p>
                <p className="text-dark-500 text-sm mt-1">{job.period}</p>
              </div>
              <ul className="space-y-3">
                {job.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-dark-300 text-sm flex items-start gap-3"
                  >
                    <span className="text-primary-400 mt-1.5 flex-shrink-0">
                      &#9656;
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
