"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
   
    {
        title: "Karimi Real Estate",
        description: "E-commerce website with Full-stack features including product listing, editing, and more functionalities.",
        technologies: ["Next.js", "Node.js", "PHP", "MySQL", "Tailwind CSS"],
        imageUrl: "/images/karimi.png",
        githubLink: "https://github.com/samadaman/",
        liveLink: "karimi.ae"
    },
    {
        title: "Pink Villa Cosmetics",
        description: "Full-stack E-commerce website with all important elements like product listing, editing, and more features.",
        technologies: ["Next.js", "Node.js", "Tailwind CSS", "MySQL"],
        imageUrl: "/images/nykaa.jpeg",
        githubLink: "https://github.com/samadaman/",
        liveLink: "pinkvillacosmetics.com"
    },
    {
        title: "Portfolio Platform",
        description: "An innovative portfolio website using Next.js, Tailwind CSS, and AI-driven interactions.",
        technologies: ["Next.js", "Tailwind CSS", "AI Integration"],
        imageUrl: "/images/projects/portfolio-project.png",
        githubLink: "https://github.com/samadaman/portfolio_samad",
        liveLink: "/"
    },
    
];

export default function ProjectsSection() {
    const [activeProject, setActiveProject] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (index) => {
        setImageErrors(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <section 
            id="projects" 
            className="
                min-h-screen 
                flex items-center justify-center 
                px-4 sm:px-8 md:px-16 lg:px-24 
                py-24
                bg-white
                relative
                overflow-hidden
            "
        >
            <div className="
                max-w-6xl 
                mx-auto 
                w-full
                relative
                z-10
            ">
                <h2 className="
                    text-4xl 
                    md:text-5xl 
                    font-bold 
                    text-center 
                    mb-16
                    text-gray-800
                    gradient-text
                ">
                    Featured Projects
                </h2>

                <div className="
                    grid 
                    md:grid-cols-2 
                    gap-12
                    items-center
                ">
                    {/* Project Image */}
                    <div className="
                        relative 
                        w-full 
                        aspect-video 
                        rounded-2xl 
                        overflow-hidden
                        shadow-2xl
                        animate-slide-in-up
                        opacity-0
                        animation-delay-500
                    ">
                        {imageErrors[activeProject] ? (
                            <div className="
                                h-full 
                                w-full 
                                flex 
                                items-center 
                                justify-center 
                                bg-gray-100 
                                animate-pulse
                            ">
                                <span className="text-gray-500">Image Not Available</span>
                            </div>
                        ) : (
                            <Image
                                src={projects[activeProject].imageUrl}
                                alt={projects[activeProject].title}
                                fill
                                priority
                                className="
                                    object-cover 
                                    object-top 
                                    transition-transform 
                                    duration-500
                                    hover:scale-105
                                "
                                onError={() => handleImageError(activeProject)}
                            />
                        )}
                    </div>

                    {/* Project Details */}
                    <div className="
                        space-y-6
                        animate-slide-in-up
                        opacity-0
                        animation-delay-700
                    ">
                        <h3 className="
                            text-3xl 
                            font-bold 
                            text-gray-800
                            mb-4
                        ">
                            {projects[activeProject].title}
                        </h3>
                        
                        <p className="
                            text-gray-600 
                            text-lg
                            mb-6
                        ">
                            {projects[activeProject].description}
                        </p>

                        <div className="
                            flex 
                            flex-wrap 
                            gap-2 
                            mb-6
                        ">
                            {projects[activeProject].technologies.map((tech) => (
                                <span 
                                    key={tech}
                                    className="
                                        px-3 
                                        py-1 
                                        bg-gray-200 
                                        text-gray-700 
                                        rounded-full 
                                        text-sm
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="
                            flex 
                            space-x-4
                        ">
                            <Link 
                                href={projects[activeProject].githubLink}
                                target="_blank"
                                className="
                                    px-6 
                                    py-3 
                                    bg-brand-500 
                                    text-white 
                                    rounded-full 
                                    hover:bg-brand-600 
                                    transition-colors 
                                    inline-flex 
                                    items-center 
                                    space-x-2
                                "
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </Link>
                            <Link 
                                href={projects[activeProject].liveLink}
                                target="_blank"
                                className="
                                    px-6 
                                    py-3 
                                    border 
                                    border-brand-500 
                                    text-brand-600 
                                    rounded-full 
                                    hover:bg-brand-50 
                                    transition-colors 
                                    inline-flex 
                                    items-center 
                                    space-x-2
                                "
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.116 1.146-.386 2.197-.787 3.057h-2.207zm0-4.057v-3.057h2.994c.038.531.113 1.054.187 1.557.094.592.188 1.173.188 1.5h-3.369zm-1-4.057v3.057h-2.994c.117-1.146.386-2.197.787-3.057h2.207zm0 4.057v3.057h-2.994c-.038-.531-.113-1.054-.188-1.557-.093-.592-.187-1.173-.187-1.5h3.369zm-3.693-4.057h-2.207c.4-.86.67-1.911.787-3.057h2.994v3.057h-1.574zm0 4.057v3.057h1.574v3.057h-2.994c-.117-1.146-.386-2.197-.787-3.057h2.207zm3.693 6.114v-3.057h2.207c-.4.86-.67 1.911-.787 3.057h-1.42zm4.057 0c.117-1.146.386-2.197.787-3.057h2.207v3.057h-2.994zm0-4.057v-3.057h2.994c.038.531.113 1.054.188 1.557.093.592.187 1.173.187 1.5h-3.369zm4.041-4.057h-2.207c-.4-.86-.67-1.911-.787-3.057h2.994v3.057h-1z" />
                                </svg>
                                <span>Live Site</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Project Navigation */}
                <div className="
                    flex 
                    justify-center 
                    space-x-4 
                    mt-12
                    animate-slide-in-up
                    opacity-0
                    animation-delay-900
                ">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveProject(index)}
                            className={`
                                w-3 h-3 
                                rounded-full 
                                transition-all 
                                duration-300
                                ${activeProject === index 
                                    ? 'bg-brand-500 w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400'}
                            `}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="
                absolute 
                top-0 left-0 right-0 bottom-0 
                pointer-events-none 
                opacity-20
            ">
                <div className="
                    absolute 
                    w-96 h-96 
                    bg-brand-500 
                    rounded-full 
                    blur-3xl 
                    animate-gradient-shift 
                    top-12 -left-12
                "></div>
                <div className="
                    absolute 
                    w-96 h-96 
                    bg-brand-500 
                    rounded-full 
                    blur-3xl 
                    animate-gradient-shift 
                    animation-delay-2000 
                    top-1/2 -right-12
                "></div>
            </div>
        </section>
    );
}
