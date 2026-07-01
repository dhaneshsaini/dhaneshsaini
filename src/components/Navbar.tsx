import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-xl font-bold tracking-widest text-ink hover:opacity-70 transition-opacity">
          DS.
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {isHome ? (
            <>
              <a href="#about" className="hover:underline underline-offset-4 decoration-ink/50 transition-all">About</a>
              <Link to="/projects" className="hover:underline underline-offset-4 decoration-ink/50 transition-all">Work</Link>
            </>
          ) : (
            <Link to="/" className="hover:underline underline-offset-4 decoration-ink/50 transition-all">Home</Link>
          )}
          <a href="#contact" className="hover:underline underline-offset-4 decoration-ink/50 transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
