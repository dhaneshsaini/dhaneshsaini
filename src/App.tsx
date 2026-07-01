import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <main className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Contact />
      </main>
    </Router>
  );
}
