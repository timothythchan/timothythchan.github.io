export const siteConfig = {
  name: "Timothy Chan",
  title: "Timothy Chan — Columbia Statistics | Quantitative Research and Trading | ML/AI System Engineering",
  description: "Personal website of Timothy Chan — Columbia Statistics, quantitative research and trading, and ML/AI system engineering",
  social: {
    github: "https://github.com/timothythchan",
    linkedin: "https://linkedin.com/in/timothythchan/",
    email: "mailto:timothy.chan@stern.nyu.edu",
  },
  profileImage: "/assets/images/profile.png",
};

export const homeContent = {
  title: "Timothy Chan",
  subtitle:
    "Columbia Statistics | Quantitative Research and Trading | ML/AI System Engineering",
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
    "Bred in Literature and Social Science, trained in Applied Mathematics. Giving scientific research and innovation a touch of aestheticism and craftsmanship, as the best algorithms require as much intuition as they do calculation. Mostly working on quantitative research and developing algorithms and ML/AI systems, but can also be seen on tennis courts and golf courses and occasionally in sports analytics. Skills before passion, work before love.",
  skills: [
    "Mathematical and Statistical Modelling",
    "ML/AI Engineering",
    "Algorithm Design",
    "Linux",
    "Python",
    "C++",
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
  education: {
    title: "Education",
    items: [
      {
        period: "2025-2026",
        degree: "Master of Arts in Statistics",
        school: "Columbia University",
        description:
          "Machine learning, statistical and mathematical finance, data engineering, AI systems, pricing and modelling of financial instruments, algorithmic trading.",
      },
      {
        period: "2024",
        degree: "Master of Arts in Political Economy (Withdrawn)",
        school: "New York University",
        description:
          "Graduate level mathematics, withdrawn due to admission to Columbia.",
      },
      {
        period: "2019-2023",
        degree: "Bachelor of Arts in Political Science and Chinese Literature",
        school: "University of Hong Kong",
        description:
          "Game theory, quantitative research method, introductory statistics.",
      },
    ],
  },
  connect: {
    title: "Open to collaboration around AI research and product development",
    description:
      "Feel free to reach out if you want to collaborate to build something. Job opportunities are also welcomed. Just message me through LinkedIn or drop me an",
    email: {
      text: "email",
      href: "mailto:timothy.chan@stern.nyu.edu",
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
