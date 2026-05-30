export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full-Stack',
      description: 'Construyo experiencias web modernas y escalables con React, Node.js y tecnologías cloud.',
      cta: 'Ver mi trabajo',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Soy un Desarrollador Full-Stack con más de 4 años de experiencia construyendo aplicaciones web robustas y escalables.',
        'Me especializo en modernizar sistemas heredados, diseñar microservicios y trabajar con arquitecturas modernas. Mi stack principal incluye JavaScript/TypeScript, React, Node.js, y bases de datos SQL y NoSQL.',
        'Tengo experiencia liderando refactorizaciones completas, integrando pasarelas de pago, y gestionando despliegues con Docker, Kubernetes y pipelines de CI/CD.',
      ],
      education: 'Licenciatura en Sistemas de Información',
      university: 'Universidad Nacional del Nordeste - 2021',
      languages: 'Idiomas',
      languagesList: 'Español (nativo), Inglés (B1+)',
    },
    experience: {
      title: 'Experiencia',
      jobs: [
        {
          company: 'Grupo Carsa S.A.',
          role: 'Desarrollador Full-Stack',
          period: 'Oct 2021 - Abr 2026',
          achievements: [
            'Lideré la refactorización completa de sistemas heredados, modernizando frontend y backend.',
            'Diseñé y desarrollé desde cero un sistema de gestión de atributos de productos utilizando Spring Boot y React.',
            'Desarrollé una aplicación de escaneo y procesamiento documental con React y Express, utilizada por más de 40 sucursales.',
            'Implementé un backend en Express.js para integrar el sistema de ventas con la pasarela de pagos Unicobros.',
            'Participé en el refactor del sistema de ventas utilizando React avanzado, Redux y WebSockets.',
            'Desarrollé un catálogo promocional de productos con Next.js.',
            'Gestioné despliegues con Jenkins, Docker y Kubernetes.',
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          name: 'Lenguajes',
          items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
        },
        {
          name: 'Frameworks & Librerías',
          items: ['React', 'Node.js', 'Express', 'Next.js', 'Spring Boot'],
        },
        {
          name: 'Bases de Datos',
          items: ['MySQL', 'SQL Server', 'MongoDB'],
        },
        {
          name: 'DevOps & Herramientas',
          items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
        },
      ],
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full-Stack Developer',
      description: 'I build modern, scalable web experiences with React, Node.js, and cloud technologies.',
      cta: 'View my work',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        "I'm a Full-Stack Developer with over 4 years of experience building robust and scalable web applications.",
        'I specialize in modernizing legacy systems, designing microservices, and working with modern architectures. My main stack includes JavaScript/TypeScript, React, Node.js, and SQL and NoSQL databases.',
        'I have experience leading complete refactoring projects, integrating payment gateways, and managing deployments with Docker, Kubernetes, and CI/CD pipelines.',
      ],
      education: "Bachelor's Degree in Information Systems",
      university: 'Universidad Nacional del Nordeste - 2021',
      languages: 'Languages',
      languagesList: 'Spanish (native), English (B1+)',
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          company: 'Grupo Carsa S.A.',
          role: 'Full-Stack Developer',
          period: 'Oct 2021 - Apr 2026',
          achievements: [
            'Led the complete refactoring of legacy systems, modernizing both frontend and backend.',
            'Designed and built from scratch a product attributes management system using Spring Boot and React.',
            'Developed a document scanning and processing application with React and Express, used by over 40 branches.',
            'Implemented an Express.js backend to integrate the sales system with the Unicobros payment gateway.',
            'Participated in the sales system refactor using advanced React, Redux, and WebSockets.',
            'Built a promotional product catalog with Next.js.',
            'Managed deployments with Jenkins, Docker, and Kubernetes.',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          name: 'Languages',
          items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
        },
        {
          name: 'Frameworks & Libraries',
          items: ['React', 'Node.js', 'Express', 'Next.js', 'Spring Boot'],
        },
        {
          name: 'Databases',
          items: ['MySQL', 'SQL Server', 'MongoDB'],
        },
        {
          name: 'DevOps & Tools',
          items: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
        },
      ],
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.es;
