import type { TranslationKeys } from "../i18n";

interface ProjectsProps {
  t: TranslationKeys;
}

export default function Projects({ t }: ProjectsProps) {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark-50 mb-12 flex items-center gap-4">
          <span className="text-primary-400 font-mono">03.</span>
          {t.projects.title}
          <span className="flex-1 h-px bg-dark-800 ml-4"></span>
        </h2>
        <div className="space-y-24">
          {t.projects.list.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
            >
              <div className="flex gap-4 lg:w-1/2 w-full">
                {project.images.map((image, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-2xl overflow-hidden border-2 border-dark-800 shadow-xl shadow-primary-500/5"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="mb-1">
                  <p className="text-primary-400 font-mono text-sm">
                    {project.subtitle}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-dark-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-dark-300 text-sm flex items-start gap-3"
                    >
                      <span className="text-primary-400 mt-1 flex-shrink-0">
                        &#9656;
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800 text-dark-300 text-xs rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors font-mono"
                    >
                      Demo
                    </a>
                  )}
                  <span className="text-dark-500 text-xs font-mono">
                    {project.demoLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
