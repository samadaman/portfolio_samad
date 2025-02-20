"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/90 dark:bg-neutral-900/90 shadow-md backdrop-blur-md' 
        : 'bg-transparent'
      }
    `}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="
            text-2xl font-bold 
            text-neutral-800 dark:text-neutral-100
            tracking-tight
            transition-colors duration-300
            hover:text-blue-600 dark:hover:text-blue-400
          "
        >
          Samad Aman
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-neutral-600 dark:text-neutral-300
                hover:text-neutral-900 dark:hover:text-white
                text-sm font-medium
                transition-colors duration-200
                relative
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                after:w-0 after:h-0.5 after:bg-blue-600
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="
            md:hidden z-50 relative w-8 h-6 
            focus:outline-none group
          "
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`
            absolute w-full h-0.5 bg-neutral-800 dark:bg-neutral-200
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? 'rotate-45 translate-y-0 bg-red-500' 
              : '-translate-y-2'
            }
          `}></span>
          <span className={`
            absolute w-full h-0.5 bg-neutral-800 dark:bg-neutral-200
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
          `}></span>
          <span className={`
            absolute w-full h-0.5 bg-neutral-800 dark:bg-neutral-200
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen 
              ? '-rotate-45 translate-y-0 bg-red-500' 
              : 'translate-y-2'
            }
          `}></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`
          fixed md:hidden inset-0 bg-white dark:bg-neutral-900
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col justify-center items-center
          z-40
        `}>
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="
                  text-2xl font-semibold
                  text-neutral-700 dark:text-neutral-200
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors duration-300
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}