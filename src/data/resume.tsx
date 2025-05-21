import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aksel Suokas",
  initials: "AS",
  url: "https://akselsuokas.com",
  location: "Helsinki, Finland",
  locationLink: "https://www.google.com/maps/place/helsinki",
  description:
    "Full Stack Developer specializing in modern web technologies. Passionate about creating efficient, scalable solutions.",
  summary:
    "I'm a dedicated Full Stack Developer with a strong foundation in both frontend and backend technologies. I've worked on various projects using React, Next.js, and other modern frameworks. My professional journey includes [building responsive web applications](/#projects) and [continuous learning in the ever-evolving tech landscape](/#education). I'm particularly passionate about creating user-friendly interfaces and optimizing performance.",
  avatarUrl: "/aksel.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "TailwindCSS",
    "MongoDB",
    "SQL",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aksel.suokas@example.com",
    tel: "+358123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Liikemies-glitch",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/akselsuokas",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/akselsuokas",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aksel.suokas@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Web Solutions Oy",
      href: "https://websolutions.fi",
      badges: [],
      location: "Helsinki, Finland",
      title: "Full Stack Developer",
      logoUrl: "/lime.svg",
      start: "January 2022",
      end: "Present",
      description:
        "Developing responsive web applications using React, Next.js, and Node.js. Implementing modern UI designs with TailwindCSS. Collaborating with a team of developers to deliver high-quality solutions to clients across various industries.",
    },
    {
      company: "DigitalTech Ltd",
      href: "https://digitaltech.fi",
      badges: [],
      location: "Espoo, Finland",
      title: "Frontend Developer",
      logoUrl: "/atomic.png",
      start: "June 2020",
      end: "December 2021",
      description:
        "Created interactive user interfaces using React and TypeScript. Worked closely with UX designers to implement responsive designs. Optimized web applications for maximum speed and scalability.",
    },
    {
      company: "TechStart Innovations",
      href: "https://techstart.fi",
      badges: [],
      location: "Tampere, Finland",
      title: "Junior Web Developer",
      logoUrl: "/nvidia.png",
      start: "September 2019",
      end: "May 2020",
      description:
        "Built and maintained websites for small to medium-sized businesses. Developed custom WordPress themes and plugins. Gained experience in frontend technologies including HTML5, CSS3, and JavaScript.",
    },
  ],
  education: [
    {
      school: "University of Helsinki",
      href: "https://helsinki.fi",
      degree: "Master's in Computer Science",
      logoUrl: "/waterloo.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Aalto University",
      href: "https://aalto.fi",
      degree: "Bachelor's in Information Technology",
      logoUrl: "/laurier.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "Helsinki Coding Bootcamp",
      href: "https://hcb.fi",
      degree: "Full Stack Web Development",
      logoUrl: "/buildspace.jpg",
      start: "2019",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      href: "https://github.com/Liikemies-glitch/ecommerce-platform",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "A modern e-commerce platform built with Next.js, featuring product listings, shopping cart functionality, user authentication, and payment integration.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecommerce-platform-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Liikemies-glitch/ecommerce-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Weather Dashboard",
      href: "https://github.com/Liikemies-glitch/weather-dashboard",
      dates: "October 2022 - December 2022",
      active: false,
      description:
        "A responsive weather dashboard that displays current weather and forecasts for any location using the OpenWeatherMap API.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "OpenWeatherMap API",
      ],
      links: [
        {
          type: "Website",
          href: "https://weather-dashboard-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Liikemies-glitch/weather-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task Manager",
      href: "https://github.com/Liikemies-glitch/task-manager",
      dates: "July 2022 - September 2022",
      active: false,
      description:
        "A full-stack task management application with features like task creation, assignment, due dates, and status tracking.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://task-manager-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Liikemies-glitch/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Personal Portfolio",
      href: "https://github.com/Liikemies-glitch/portfolios",
      dates: "April 2023 - Present",
      active: true,
      description:
        "My personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and TailwindCSS.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://akselsuokas.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Liikemies-glitch/portfolios",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Junction Hackathon",
      dates: "November 5-7, 2021",
      location: "Helsinki, Finland",
      description:
        "Developed a sustainable transportation solution that helps users find eco-friendly routes for their daily commute.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Liikemies-glitch/eco-route",
        },
      ],
    },
    {
      title: "React Finland Hackathon",
      dates: "April 12-14, 2021",
      location: "Helsinki, Finland",
      description:
        "Created a React-based application that helps users track and reduce their carbon footprint through daily activities.",
      image: "",
      win: "2nd Place",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Liikemies-glitch/carbon-tracker",
        },
      ],
    },
    {
      title: "Nordic Health Hackathon",
      dates: "September 15-17, 2020",
      location: "Stockholm, Sweden",
      description:
        "Developed a mobile application that connects elderly people with volunteers for assistance with everyday tasks.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Liikemies-glitch/elder-connect",
        },
      ],
    },
  ],
} as const;
