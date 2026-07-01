export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  year: string;
  techStack?: string[];
}

export const projects: Project[] = [
  {
    id: 'ethereal-magazine',
    title: 'Ethereal Magazine',
    category: 'Editorial Design / Web',
    description: 'A minimal digital magazine focused on modern art and architecture, utilizing a stark black and white palette.',
    longDescription: 'Ethereal Magazine was born out of a desire to create a digital reading experience that respects the content. By removing all UI clutter and focusing purely on typography and layout, the platform allows modern art and architecture pieces to breathe. Built with performance in mind using React and optimized WebGL for smooth image transitions.',
    year: '2024',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Framer Motion']
  },
  {
    id: 'archive-studio',
    title: 'Archive Studio',
    category: 'Brand Identity',
    description: 'Monochromatic branding for an independent photography studio, emphasizing negative space and sharp typography.',
    longDescription: 'A complete brand overhaul for a high-end photography studio. The goal was to create an identity that felt both timeless and starkly modern. The project included a custom logo mark, business collateral, and a blazing fast portfolio website designed to showcase high-resolution images without performance degradation.',
    year: '2023',
    techStack: ['Next.js', 'Figma', 'GSAP', 'Vercel']
  },
  {
    id: 'objekt',
    title: 'Objekt',
    category: 'E-Commerce App',
    description: 'A clean, distraction-free shopping experience for premium minimalist furniture and homeware.',
    longDescription: 'Objekt redefines e-commerce by removing aggressive marketing tactics and focusing on the product. The application leverages a headless CMS and a custom checkout flow to provide a seamless, premium shopping experience. Heavy focus was placed on accessibility and mobile-first design.',
    year: '2023',
    techStack: ['React', 'Node.js', 'Stripe API', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'luna-ai',
    title: 'Luna AI Learning',
    category: 'EdTech Platform',
    description: 'An AI-powered learning platform featuring structured paths, interview prep, and intelligent question prediction.',
    longDescription: 'Luna is my passion project—a comprehensive learning ecosystem designed to help students and job seekers master complex topics. It utilizes natural language processing to generate custom explanations and predict likely interview questions based on the user\'s target role and current skill level.',
    year: '2024',
    techStack: ['Go (Golang)', 'React', 'OpenAI API', 'WebAssembly', 'PostgreSQL']
  },
  {
    id: 'canvas-engine',
    title: 'Canvas Render Engine',
    category: 'Open Source',
    description: 'A lightweight 2D rendering engine built with HTML5 Canvas API and WebAssembly for high-performance graphics.',
    longDescription: 'An experimental rendering engine built to push the limits of browser performance. By offloading heavy calculations to WebAssembly, the engine can render thousands of interactive particles at a stable 60FPS. Designed as a learning exercise in low-level browser APIs and memory management.',
    year: '2025',
    techStack: ['JavaScript', 'Canvas API', 'WebAssembly', 'C++']
  }
];
