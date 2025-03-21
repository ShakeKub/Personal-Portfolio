"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Close menu when an item is clicked
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-sm bg-zinc-900/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl hover:text-zinc-300 transition-colors">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={(e) => scrollToSection(e, 'skills')}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-zinc-900/95 rounded-md backdrop-blur-sm animate-fade-down">
            <nav className="flex flex-col space-y-4 px-4">
              <a
                href="#about"
                className="text-zinc-400 hover:text-white transition-colors py-2"
                onClick={(e) => scrollToSection(e, 'about')}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-zinc-400 hover:text-white transition-colors py-2"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-zinc-400 hover:text-white transition-colors py-2"
                onClick={(e) => scrollToSection(e, 'skills')}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-zinc-400 hover:text-white transition-colors py-2"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
