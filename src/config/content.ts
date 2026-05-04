export const siteConfig = {
  name: "Timothy Chan",
  title: "Timothy Chan — Mathematician & AI Engineer",
  description: "Personal website of Timothy Chan — mathematician, AI engineer, and researcher",
  social: {
    github: "https://github.com/timothythchan",
    email: "mailto:hello@timothychan.dev",
  },
};

export const homeContent = {
  title: "Hello, I'm Timothy Chan",
  description:
    "A mathematician and AI engineer passionate about bridging rigorous mathematical theory with modern machine learning. I build models, design experiments, and write about the intersection of mathematics and artificial intelligence.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "/assets/images/tech-background.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Timothy Chan",
    description: "Learn more about Timothy Chan's background, skills, and experience",
  },
  title: "About Me",
  description:
    "I'm a mathematician and AI engineer with a deep interest in applying mathematical modelling and statistical analysis to real-world problems. My work spans from developing neural network architectures to building production ML pipelines, always grounded in solid mathematical foundations.",
  skills: [
    "Python",
    "PyTorch",
    "Mathematical Modelling",
    "Statistical Analysis",
    "TypeScript",
    "Docker",
    "Git",
    "Linux",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2024 - Present",
        position: "AI Research Engineer",
        company: "Independent Research",
        description:
          "Conducting independent research at the intersection of mathematics and deep learning. Building and evaluating novel model architectures.",
      },
      {
        period: "2022 - 2024",
        position: "Machine Learning Engineer",
        company: "AI Research Lab",
        description:
          "Designed and deployed machine learning models for production systems. Developed data pipelines and model training infrastructure.",
      },
      {
        period: "2020 - 2022",
        position: "Research Assistant",
        company: "University Mathematics Department",
        description:
          "Applied mathematical modelling and statistical methods to research problems. Published findings in peer-reviewed venues.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate on research, discuss mathematics and AI, or just say hi! You can find me on GitHub or drop me an",
    email: {
      text: "email",
      href: "mailto:hello@timothychan.dev",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Timothy Chan",
    description: "Showcase of Timothy Chan's projects and work",
  },
  title: "My Projects",
  description:
    "A collection of projects I've built, from research tools to web applications. Each project reflects my interest in combining mathematical thinking with practical engineering.",
  projects: [
    {
      title: "Personal Website",
      description:
        "My personal portfolio and blog built with Astro 5, featuring Tailwind CSS, light/dark theme toggle, and markdown-driven content.",
      image: "/assets/images/tech-background-dark.svg",
      href: "https://github.com/timothythchan/timothythchan.github.io",
    },
  ],
};
