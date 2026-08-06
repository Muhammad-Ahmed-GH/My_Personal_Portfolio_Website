type PageData = {
  aboutMe: {
    id: number;
    icon: string;
    title: string;
    text: string;
  }[];
  skills: {
    languages: {
      id: number;
      name: string;
      icon: string;
    }[];
    frameworksAndTools: {
      id: number;
      name: string;
      icon: string;
    }[];
    others: {
      id: number;
      name: string;
      icon: string;
    }[];
  };
  projects: {
    id: number;
    title: string;
    icon: string;
    techStack: string[];
    status: "inProgress" | "done" | "canceled";
    links: {
      github: string;
      live?: string;
    };
  }[];
  contact: {
    emails: string[];
    phones: string[];
  };
};

export const pageData: PageData = {
  aboutMe: [
    {
      id: 1,
      icon: "fa-solid fa-globe",
      title: "frontend developer",
      text: "A frontend developer focused on efficient code and crafting responsive, user-friendly interfaces. Always learning and improving to stay current with web development standards",
    },
    {
      id: 2,
      icon: "fa-solid fa-graduation-cap",
      title: "computer science student",
      text: "A distinguished CS student with a high academic record (GPA 4.0) and solid knowledge of algorithms, data structures, and software engineering principles",
    },
    {
      id: 3,
      icon: "fa-solid fa-people-group",
      title: "Team Leader",
      text: "I have led many projects, guiding my team to find the best solutions and maintain strong collaboration. I value teamwork, communication, and problem-solving",
    },
    {
      id: 4,
      icon: "fa-brands fa-python",
      title: "Prior Background",
      text: "Solid experience in C, C++, Python, and Java, with several completed projects. This background helps me write efficient solutions and understand how things work under the hood",
    },
    {
      id: 5,
      icon: "fa-solid fa-book",
      title: "Fast Learner",
      text: "Passionate about technology since childhood, I learn quickly and enjoy exploring new tools, frameworks, and concepts to improve my work and broaden my skillset",
    },
  ],
  skills: {
    languages: [
      {
        id: 1,
        name: "TypeScript",
        icon: "devicon-typescript-plain",
      },
      {
        id: 2,
        name: "JavaScript",
        icon: "fa-brands fa-js",
      },
      {
        id: 3,
        name: "CSS",
        icon: "fa-brands fa-css3-alt",
      },
      {
        id: 4,
        name: "HTML",
        icon: "fa-brands fa-html5",
      },
    ],
    frameworksAndTools: [
      {
        id: 1,
        name: "React",
        icon: "fa-brands fa-react",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        icon: "fa-brands fa-tailwind-css",
      },
      {
        id: 3,
        name: "Vite",
        icon: "devicon-vitejs-plain",
      },

      {
        id: 4,
        name: "Git/GitHub",
        icon: "fa-brands fa-github-alt",
      },
    ],
    others: [
      {
        id: 1,
        name: "Python",
        icon: "fa-brands fa-python",
      },
      {
        id: 2,
        name: "C",
        icon: "devicon-c-original",
      },
      {
        id: 3,
        name: "C++",
        icon: "devicon-cplusplus-plain",
      },
      {
        id: 4,
        name: "Java",
        icon: "fa-brands fa-java",
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "dritto browser extension",
      icon: "fa-solid fa-puzzle-piece",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      status: "inProgress",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/dritto",
      },
    },
    {
      id: 2,
      title: "flavorAI",
      icon: "fa-solid fa-bowl-rice",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/flavor-ai",
      },
    },
    {
      id: 3,
      title: "studo schedule generator",
      icon: "fa-solid fa-calendar",
      techStack: ["JavaScript", "CSS", "HTML", "Flask"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/studo-schedule-generator",
      },
    },
    {
      id: 4,
      title: "tenzies game",
      icon: "fa-solid fa-circle-question",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/tenzies-game",
      },
    },
    {
      id: 5,
      title: "meme generator",
      icon: "fa-regular fa-face-grin-squint-tears",
      techStack: ["React", "TailwindCSS", "Vite"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/meme-generator",
      },
    },
    {
      id: 6,
      title: "my templates hub",
      icon: "fa-solid fa-palette",
      techStack: ["HTML", "CSS"],
      status: "inProgress",
      links: {
        github: "https://github.com/muhammad-ahmed-gh/template-hub",
        live: "https://muhammad-ahmed-gh.github.io/template-hub",
      },
    },
    {
      id: 7,
      title: "mini projects collection",
      icon: "fa-solid fa-puzzle-piece",
      techStack: ["HTML", "CSS", "JavaScript"],
      status: "inProgress",
      links: {
        github: "https://github.com/muhammad-ahmed-gh/my-mini-projects",
        live: "https://muhammad-ahmed-gh.github.io/my-mini-projects",
      },
    },
    {
      id: 8,
      title: "Dashboard | HTML & CSS template",
      icon: "fa-solid fa-paintbrush",
      techStack: ["HTML", "CSS"],
      status: "inProgress",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/dashboard-html-css-template-4/",
        live: "https://muhammad-ahmed-gh.github.io/dashboard-html-css-template-4",
      },
    },
    {
      id: 9,
      title: "Nexo | HTML & CSS template",
      icon: "fa-solid fa-paintbrush",
      techStack: ["HTML", "CSS"],
      status: "inProgress",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/nexo-html-css-template-3/",
        live: "https://muhammad-ahmed-gh.github.io/nexo-html-css-template-3",
      },
    },
    {
      id: 10,
      title: "Kasper | HTML & CSS template",
      icon: "fa-solid fa-paintbrush",
      techStack: ["HTML", "CSS"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/kasper-html-css-template-2/",
        live: "https://muhammad-ahmed-gh.github.io/kasper-html-css-template-2",
      },
    },
    {
      id: 11,
      title: "Leon | HTML & CSS template",
      icon: "fa-solid fa-paintbrush",
      techStack: ["HTML", "CSS"],
      status: "done",
      links: {
        github:
          "https://github.com/muhammad-ahmed-gh/leon-html-css-template-1/",
        live: "https://muhammad-ahmed-gh.github.io/leon-html-css-template-1",
      },
    },
  ],
  contact: {
    emails: ["muhammad.elrassam@gmail.com"],
    phones: ["+201146771613"],
  },
};
