type ProjectData = {
  title: string;
  slug: string;
  thumb: string;
  description: string;
  live: string;
  tech: string[];
}[];

export const project_data: ProjectData = [
  {
    title: "Weather App",
    slug: "weather-app",
    thumb: "weather.png",
    description:
      "A React-based app that displays current weather information using an API.",
    live: "https://dhaneshsaini.github.io/weatherapp-react/",
    tech: ["React", "API", "JavaScript"],
  },
  {
    title: "Expense Tracker",
    slug: "expense-tracker",
    thumb: "expense-tracker.png",
    description:
      "A Progressive Web App (PWA) to track expenses, built with React.",
    live: "https://dhaneshsaini.github.io/expense-tracker/",
    tech: ["React", "PWA", "JavaScript"],
  },
  {
    title: "Pincode Finder",
    slug: "pincode-finder",
    thumb: "pincode.png",
    description: "A tool to find pincodes using Pocketbase and React.",
    live: "https://dhaneshsaini.github.io/pincode_finder/",
    tech: ["React", "Pocketbase", "JavaScript"],
  },
  {
    title: "RNC Fintax",
    slug: "rnc-fintax",
    thumb: "rncfintax.png",
    description: "A financial services website built with NextJS.",
    live: "https://rncfintax.com/",
    tech: ["NextJS", "JavaScript"],
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    thumb: "porfolio.png",
    description:
      "Personal portfolio website showcasing projects and skills, created with NextJS and TypeScript.",
    live: "https://dhanesh.vercel.app/",
    tech: ["NextJS", "TypeScript"],
  },
  {
    title: "Branding Pioneers",
    slug: "branding-pioneers",
    thumb: "brandingpioneers.png",
    description:
      "A Digital marketing website for brandingpioneers built with React.",
    live: "https://healthpioneers.in/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Sticky Notes",
    slug: "sticky-notes",
    thumb: "sticky-notes.png",
    description:
      "A simple sticky notes app for taking quick notes, built with React.",
    live: "https://dhaneshsaini.github.io/sticky-notes/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Quiz App",
    slug: "quiz-app",
    thumb: "quizapp.png",
    description:
      "A quiz application for testing knowledge, developed using React.",
    live: "https://dhaneshsaini.github.io/React-Quiz-App/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Mines Game",
    slug: "mines-game",
    thumb: "mines.jpeg",
    description: "A TypeScript Mines game built with React.",
    live: "https://dhaneshsaini.github.io/mines/",
    tech: ["React", "TypeScript"],
  },
  {
    title: "Spotify Widget",
    slug: "spotify-widget",
    thumb: "spotify-widget.png",
    description: "A React widget for displaying Spotify music information.",
    live: "https://dhaneshsaini.github.io/spotify-widget/",
    tech: ["React", "JavaScript"],
  },
];
