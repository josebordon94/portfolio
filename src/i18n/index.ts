export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Full-Stack",
      description:
        "Construyo experiencias web modernas y escalables con React, Node.js y tecnologías cloud.",
      cta: "Ver mi trabajo",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy un Desarrollador Full-Stack con más de 4 años de experiencia construyendo aplicaciones web robustas y escalables.",
        "Me especializo en modernizar sistemas heredados, diseñar microservicios y trabajar con arquitecturas modernas. Mi stack principal incluye JavaScript/TypeScript, React, Node.js, y bases de datos SQL y NoSQL.",
        "Tengo experiencia liderando refactorizaciones completas, integrando pasarelas de pago, y gestionando despliegues con Docker, Kubernetes y pipelines de CI/CD.",
      ],
      education: "Licenciatura en Sistemas de Información",
      university: "Universidad Nacional del Nordeste - 2021",
      languages: "Idiomas",
      languagesList: "Español (nativo), Inglés (B2+)",
    },
    experience: {
      title: "Experiencia",
      jobs: [
        {
          company: "Grupo Carsa S.A.",
          role: "Desarrollador Full-Stack",
          period: "Oct 2021 - Abr 2026",
          achievements: [
            "Lideré la refactorización completa de sistemas heredados, modernizando frontend y backend.",
            "Diseñé y desarrollé desde cero un sistema de gestión de atributos de productos utilizando Spring Boot y React.",
            "Desarrollé una aplicación de escaneo y procesamiento documental con React y Express, utilizada por más de 40 sucursales.",
            "Implementé un backend en Express.js para integrar el sistema de ventas con la pasarela de pagos Unicobros.",
            "Participé en el refactor del sistema de ventas utilizando React avanzado, Redux y WebSockets.",
            "Desarrollé un catálogo promocional de productos con Next.js.",
            "Gestioné despliegues con Jenkins, Docker y Kubernetes.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades",
      categories: [
        {
          name: "Lenguajes",
          items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
        },
        {
          name: "Frameworks & Librerías",
          items: ["React", "Node.js", "Express", "Next.js", "Spring Boot"],
        },
        {
          name: "Bases de Datos",
          items: ["MySQL", "SQL Server", "MongoDB"],
        },
        {
          name: "DevOps & Herramientas",
          items: ["Docker", "Kubernetes", "Jenkins", "Git", "Linux"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      list: [
        {
          title: "Incanto App",
          subtitle: "Gestión integral de academia de canto",
          description:
            "Aplicación móvil multiplataforma para la gestión completa de una academia de canto (Fundación Incanto). Alumnos, profesores y administradores interactúan en una misma plataforma: los alumnos reservan turnos de clase y ven anuncios, los profesores consultan sus clases asignadas, y los administradores gestionan usuarios, horarios, publicaciones y pagos desde un panel completo.",
          highlights: [
            "App móvil multiplataforma con Ionic 8 + React + Capacitor",
            "API REST con NestJS, autenticación JWT y WebSockets en tiempo real",
            "Roles con permisos diferenciados: student, teacher, admin",
            "Sistema de horarios semanales recurrentes con excepciones y ausencias",
            "Reserva de turnos individuales y grupales con control de asistencia",
            "Feed de anuncios con imágenes y editor rich text",
            "PostgreSQL con TypeORM, datos seed y migraciones",
            "Publicada en Google Play Store (en progreso)",
          ],
          tech: [
            "Ionic 8",
            "React",
            "Capacitor",
            "NestJS",
            "TypeScript",
            "PostgreSQL",
            "TypeORM",
            "JWT",
          ],
          images: [
            "/projects-images/incanto/schedules.png",
            "/projects-images/incanto/home.png",
            "/projects-images/incanto/config.png",
          ],
          links: {},
          demoLabel: "",
        },
        {
          title: "Prode para Empresas",
          subtitle: "Plataforma de predicción deportiva",
          description:
            "Sistema completo de predicción de resultados para el Mundial FIFA 2026. Los usuarios registran sus pronósticos, compiten en un ranking en tiempo real, y un panel administrativo permite gestionar usuarios, cargar resultados y visualizar estadísticas del sistema. Se desarrolló para personal de un hospital, pero puede adaptarse rápidamente a cualquier organización.",
          highlights: [
            "800+ usuarios activos en producción",
            "Autenticación segura con cookies HTTP-only + bcrypt",
            "Motor de puntuación con recálculo automático",
            "Panel admin con carga masiva desde Excel",
            "Rankings en tiempo real por fase del torneo",
            "Rate limiting, caché en memoria y validación de inputs",
          ],
          tech: [
            "Next.js 14",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Drizzle ORM",
            "Docker",
          ],
          images: [
            "/projects-images/prode/partidos-portrait.png",
            "/projects-images/prode/admin-portrait.png",
          ],
          links: {
            demo: "https://sports-prediction-platform-xi.vercel.app",
          },
          demoLabel: "UI demo parcial, sin backend",
        },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full-Stack Developer",
      description:
        "I build modern, scalable web experiences with React, Node.js, and cloud technologies.",
      cta: "View my work",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Full-Stack Developer with over 4 years of experience building robust and scalable web applications.",
        "I specialize in modernizing legacy systems, designing microservices, and working with modern architectures. My main stack includes JavaScript/TypeScript, React, Node.js, and SQL and NoSQL databases.",
        "I have experience leading complete refactoring projects, integrating payment gateways, and managing deployments with Docker, Kubernetes, and CI/CD pipelines.",
      ],
      education: "Bachelor's Degree in Information Systems",
      university: "Universidad Nacional del Nordeste - 2021",
      languages: "Languages",
      languagesList: "Spanish (native), English (B2+)",
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "Grupo Carsa S.A.",
          role: "Full-Stack Developer",
          period: "Oct 2021 - Apr 2026",
          achievements: [
            "Led the complete refactoring of legacy systems, modernizing both frontend and backend.",
            "Designed and built from scratch a product attributes management system using Spring Boot and React.",
            "Developed a document scanning and processing application with React and Express, used by over 40 branches.",
            "Implemented an Express.js backend to integrate the sales system with the Unicobros payment gateway.",
            "Participated in the sales system refactor using advanced React, Redux, and WebSockets.",
            "Built a promotional product catalog with Next.js.",
            "Managed deployments with Jenkins, Docker, and Kubernetes.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Languages",
          items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
        },
        {
          name: "Frameworks & Libraries",
          items: ["React", "Node.js", "Express", "Next.js", "Spring Boot"],
        },
        {
          name: "Databases",
          items: ["MySQL", "SQL Server", "MongoDB"],
        },
        {
          name: "DevOps & Tools",
          items: ["Docker", "Kubernetes", "Jenkins", "Git", "Linux"],
        },
      ],
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Incanto App",
          subtitle: "Singing academy management",
          description:
            "A cross-platform mobile app for the complete management of a singing academy (Fundación Incanto). Students, teachers, and administrators interact on a single platform: students book class slots and view announcements, teachers check their assigned classes, and admins manage users, schedules, publications, and payments from a full dashboard.",
          highlights: [
            "Cross-platform mobile app with Ionic 8 + React + Capacitor",
            "REST API with NestJS, JWT authentication, and real-time WebSockets",
            "Role-based permissions: student, teacher, admin",
            "Recurring weekly schedules with exceptions and absences",
            "Individual and group class booking with attendance tracking",
            "Announcement feed with images and rich text editor",
            "PostgreSQL with TypeORM, seed data, and migrations",
            "Published on Google Play Store (in progress)",
          ],
          tech: [
            "Ionic 8",
            "React",
            "Capacitor",
            "NestJS",
            "TypeScript",
            "PostgreSQL",
            "TypeORM",
            "JWT",
          ],
          images: [
            "/projects-images/incanto/schedules.png",
            "/projects-images/incanto/home.png",
            "/projects-images/incanto/config.png",
          ],
          links: {},
          demoLabel: "",
        },
        {
          title: "World Cup Predictor",
          subtitle: "Sports prediction platform",
          description:
            "A complete match prediction system for the FIFA World Cup. Users register their predictions, compete in a real-time ranking, and an admin panel enables user management, result entry, and system statistics. It was built for hospital staff but can be adapted to any organization.",
          highlights: [
            "800+ active users in production",
            "Secure authentication with HTTP-only cookies + bcrypt",
            "Scoring engine with automatic recalculation",
            "Admin panel with bulk Excel import",
            "Real-time rankings by tournament phase",
            "Rate limiting, in-memory cache, and input validation",
          ],
          tech: [
            "Next.js 14",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Drizzle ORM",
            "Docker",
          ],
          images: [
            "/projects-images/prode/partidos-portrait.png",
            "/projects-images/prode/admin-portrait.png",
          ],
          links: {
            demo: "https://sports-prediction-platform-xi.vercel.app",
          },
          demoLabel: "Partial UI demo, no backend",
        },
      ],
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof translations.es;
