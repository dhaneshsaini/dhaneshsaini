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
    title: "Everyicon - Free Icon Maker",
    slug: "everyicon",
    thumb: "everyicon.png",
    description:
      "A powerful online tool for creating icons, favicons, and logos with a variety of customization options including background shapes, colors, and font selection. Built using React, Astro, and Nanostores for state management.",
    live: "https://everyicon-online.pages.dev/",
    tech: ["React", "Astro", "Nanostores"],
  },
  {
    title: "CaptionAI - AI powered caption generator.",
    slug: "captionai",
    thumb: "captionai.jpeg",
    description:
      "An AI-driven application that generates creative captions, alt text, and descriptions for images, designed to assist content creators across social media platforms. Developed with React and Astro, this tool leverages AI to create engaging content effortlessly.",
    live: "https://captionaipro.pages.dev/",
    tech: ["React", "Astro"],
  },
  {
    title: "Calculate Converter - Unit Converter & Calculator",
    slug: "calculateconverter",
    thumb: "calculateconverter.png",
    description:
      "A versatile web application that combines a unit converter and calculator, allowing users to perform various conversions and calculations in one place. Built with React and Astro, it offers a user-friendly interface for quick and accurate results.",
    live: "https://calculateconverter.com/",
    tech: ["Astro"],
  },
  {
    title: "ResumeCV123 - Resume Builder",
    slug: "resumecv123",
    thumb: "resumecv123.png",
    description:
      "An intuitive resume builder that enables users to create professional resumes and CVs with customizable templates and easy-to-use editing tools. Developed using Vue.js, this application simplifies the resume creation process for job seekers.",
    live: "https://resumecv123.netlify.app/",
    tech: ["Vue"],
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    thumb: "portfolio.jpeg",
    description:
      "A personal portfolio showcasing projects, technical skills, and achievements. Built with NextJS and TypeScript, the portfolio features a sleek design, project links, and descriptions, serving as a professional online resume.",
    live: "https://dhanesh.vercel.app/",
    tech: ["NextJS", "TypeScript"],
  },
  {
    title: "RNC Fintax",
    slug: "rnc-fintax",
    thumb: "rncfintax.png",
    description:
      "A professional financial services website created using NextJS, designed for RNC Fintax. The site features various service offerings related to tax, accounting, and legal compliance, with a modern and responsive design.",
    live: "https://rncfintax.com/",
    tech: ["NextJS", "JavaScript"],
  },
  {
    title: "Pincode Finder",
    slug: "pincode-finder",
    thumb: "pincode.png",
    description:
      "A React-based tool that helps users find Indian pincodes and their related information. The app integrates Pocketbase for backend storage and provides an efficient way to search through large datasets.",
    live: "https://dhaneshsaini.github.io/pincode_finder/",
    tech: ["React", "Pocketbase", "JavaScript"],
  },
  {
    title: "Branding Pioneers",
    slug: "branding-pioneers",
    thumb: "brandingpioneers.png",
    description:
      "A digital marketing website built for Branding Pioneers. This React-powered website focuses on SEO, online branding, and marketing services to help businesses increase their digital presence.",
    live: "https://healthpioneers.in/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Weather App",
    slug: "weather-app",
    thumb: "weather.png",
    description:
      "A weather forecasting app built with React, displaying real-time weather data by fetching information from a weather API. The app provides current temperature, weather conditions, and forecasts for any location worldwide.",
    live: "https://dhaneshsaini.github.io/weatherapp-react/",
    tech: ["React", "API", "JavaScript"],
  },
  {
    title: "Expense Tracker",
    slug: "expense-tracker",
    thumb: "expense-tracker.png",
    description:
      "A Progressive Web App (PWA) for managing and tracking daily expenses. Built with React, it allows users to add, edit, and delete transactions, while maintaining a balance summary. The app is fully offline-capable and mobile-friendly.",
    live: "https://dhaneshsaini.github.io/expense-tracker/",
    tech: ["React", "PWA", "JavaScript"],
  },
  {
    title: "Sticky Notes",
    slug: "sticky-notes",
    thumb: "sticky-notes.png",
    description:
      "A simple and interactive sticky notes app built with React. Users can create, edit, and delete notes in a user-friendly interface, offering a quick solution for personal note-taking.",
    live: "https://dhaneshsaini.github.io/sticky-notes/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Quiz App",
    slug: "quiz-app",
    thumb: "quizapp.png",
    description:
      "An interactive quiz application developed using React. The app allows users to take quizzes on various topics, displaying results at the end. It features a clean UI and dynamic question rendering.",
    live: "https://dhaneshsaini.github.io/React-Quiz-App/",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Mines Game",
    slug: "mines-game",
    thumb: "mines.jpeg",
    description:
      "A TypeScript version of the classic Minesweeper game built with React. The game offers a responsive interface and multiple difficulty levels, providing a fun and challenging experience for users.",
    live: "https://dhaneshsaini.github.io/mines/",
    tech: ["React", "TypeScript"],
  },
  {
    title: "Spotify Widget",
    slug: "spotify-widget",
    thumb: "spotify-widget.png",
    description:
      "A lightweight React widget for displaying real-time Spotify music information. This widget fetches data using the Spotify API and displays details such as the current song, artist, and album cover.",
    live: "https://dhaneshsaini.github.io/spotify-widget/",
    tech: ["React", "JavaScript"],
  },
];
