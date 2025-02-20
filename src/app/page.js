"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/components/header";
import HeaderSection from "@/components/HeaderSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.3
      }
    },
    out: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const sectionVariants = {
    initial: { 
      opacity: 0, 
      y: 50 
    },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="
      bg-white 
      min-h-screen 
      overflow-hidden 
      relative
    ">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key="page-content"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="
            relative 
            z-10 
            bg-white
          "
        >
          <motion.div variants={sectionVariants}>
            <HeaderSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <AboutSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <SkillsSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ProjectsSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ExperienceSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ContactSection />
          </motion.div>
        </motion.main>
      </AnimatePresence>

      {/* Elegant Background Decorations */}
      <div 
        className="
          absolute 
          top-0 
          left-0 
          w-full 
          h-full 
          pointer-events-none 
          opacity-10
        "
        aria-hidden="true"
      >
        <div 
          className="
            absolute 
            top-1/4 
            left-1/4 
            w-96 
            h-96 
            bg-brand-100 
            rounded-full 
            blur-3xl 
            opacity-50
          "
        />
        <div 
          className="
            absolute 
            bottom-1/4 
            right-1/4 
            w-72 
            h-72 
            bg-brand-200 
            rounded-full 
            blur-3xl 
            opacity-50
          "
        />
      </div>
    </div>
  );
}