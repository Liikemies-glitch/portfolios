import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aksel Suokas",
  initials: "AS",
  url: "https://akselsuokas.com",
  location: "Helsinki, Finland",
  locationLink: "https://www.google.com/maps/place/helsinki",
  description:
    "I design interfaces that do NOT make users want to throw their devices. Delivering measurable results through data-driven design for over 5 years.",
  summary:
    "Over the past five years, I have delivered measurable results to my clients through high-quality, modern, and fresh design solutions - rooted not in guesswork but in data and research. I am a UX Designer with a deep understanding of both design and development, ensuring I create not just visually appealing, but also highly functional and scalable digital services. My ability to bridge the gap between designers and developers allows for smoother collaboration and efficient execution of projects. When I'm not designing interfaces, I'm passionate about riding motorcycles, playing video games, and spending time with friends - whether it's over a game of billiards, a round of badminton, or just a good time overall.",
  avatarUrl: "/aksel.jpeg",
  skills: [
    "UX/UI design",
    "Visual design",
    "Prototyping",
    "User research",
    "Usability testing",
    "Design systems",
    "Process development",
    "Workshop facilitation",
    "HTML & CSS",
    "JavaScript",
    "Figma",
    "Webflow",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aksel@goodside.fi",
    tel: "+358403194366",
    social: {
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
        url: "mailto:aksel@goodside.fi",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Truster.com",
      href: "https://truster.com",
      badges: [],
      location: "Lasikutusspaivelut, Finland",
      title: "UX/UI & Product Designer",
      logoUrl: "/lime.svg",
      start: "February 2024",
      end: "Present",
      description:
        "Responsible for the UX/UI of Truster's mobile application, ERP, and website. Contributed to scaling the business from 6,000 to 35,000 users. Designed a feature that increased extra service requests, generating additional revenue. Developed a modular design system in Figma to streamline workflows. Redesigned ERP views, leading to improved processing efficiency.",
    },
    {
      company: "Finnish Customs",
      href: "https://tulli.fi",
      badges: [],
      location: "Finland",
      title: "Web Services Specialist",
      logoUrl: "/atomic.png",
      start: "June 2023",
      end: "January 2024",
      description:
        "Contributed to the redesign of the Tulli brand and website. Played a key role in enhancing UX processes and conducting user interviews. Designed pages for the new Tulli website, leveraging existing data and AI tools.",
    },
    {
      company: "Suokas Consulting",
      href: "https://suokasconsulting.fi",
      badges: [],
      location: "Finland",
      title: "UX/UI Consultant",
      logoUrl: "/nvidia.png",
      start: "May 2019",
      end: "Present",
      description:
        "Designed and developed numerous digital experiences with a focus on user-centric design. Created and optimized Webflow sites to enhance usability and performance. Helped clients boost sales, including launching a webshop that received 800 orders in its first weekend. Streamlined a complex UX flow for electricity deal comparisons, significantly increasing conversions.",
    },
    {
      company: "Bambukeidas Oy",
      href: "https://bambukeidas.fi",
      badges: [],
      location: "Finland",
      title: "Art Director",
      logoUrl: "/mitremedia.png",
      start: "September 2020",
      end: "July 2021",
      description:
        "Played a key role in developing Bambukeidas digital experience, driving growth in both the customer base and brand recognition through visual, technical, and analytical improvements. As Art Director, ensured brand consistency across all channels, maintaining a unified visual identity. Designed a variety of graphic elements for both digital and physical applications, including websites, newsletters, internal design templates, clothing packaging, and flyers.",
    },
    {
      company: "Idea Markkinointi Oy",
      href: "https://ideamarkkinointi.fi",
      badges: [],
      location: "Finland",
      title: "Design Consult",
      logoUrl: "/buildspace.jpg",
      start: "August 2020",
      end: "November 2020",
      description:
        "Provided design consultation services focusing on improving user experience and visual design for client projects. Collaborated with cross-functional teams to implement design best practices.",
    },
    {
      company: "Kasvutoimisto Kidea Oy",
      href: "https://kidea.fi",
      badges: [],
      location: "Finland",
      title: "UX/UI Design Trainee",
      logoUrl: "/ib.png",
      start: "March 2020",
      end: "May 2020",
      description:
        "Started career in UX/UI design through this trainee position. Learned fundamentals of user experience design, wireframing, and prototyping. Contributed to client projects under senior designer supervision.",
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
