"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        company: "Guru Cool Coding",
        role: "Senior Full Stack Developer",
        period: "Sep 2024 - Present",
        description: [
            "Lead development of complex web applications using React, Next.js, and WordPress",
            "Architect scalable microservices and RESTful APIs with Node.js and Express",
            "Implement advanced performance optimization techniques and responsive design"
        ],
        logo: "/icons/guru.jpeg",
        companyImage: "/icons/guru.jpeg"
    },
    {
        company: "Freelancing",
        role: "WordPress Developer",
        period: "Jun 2022 - Present",
        description: [
            "Developed custom WordPress themes and plugins for diverse client requirements",
            "Integrated advanced e-commerce solutions using WooCommerce",
            "Optimized website performance and implemented SEO best practices"
        ],
        logo: "/icons/freelance.webp",
        companyImage: "/icons/freelance.webp"
    },
    {
        company: "Aadi Foundation",
        role: "Internship",
        period: "Feb 2025 - Feb 2025",
        description: [
            "Assisted in development of MVP web applications with modern JavaScript frameworks",
            "Provided technical support for internal projects",
            "Participated in code reviews and contributed to open-source projects"
        ],
        logo: "/icons/ngo.png",
        companyImage: "/icons/ngo.png"
    }
];

export default function ExperienceSection() {
    const [activeExperience, setActiveExperience] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeInOut"
            }
        }
    };

    return (
        <section 
            id="experience" 
            className="
                min-h-screen 
                flex 
                items-center 
                justify-center 
                px-4 
                sm:px-8 
                md:px-16 
                lg:px-24 
                py-24
                bg-white
                relative
                overflow-hidden
            "
        >
            <div className="
                max-w-6xl 
                mx-auto 
                grid 
                md:grid-cols-2 
                gap-16 
                items-center
                relative
                z-10
            ">
                {/* Experience Navigation */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="
                            text-4xl 
                            md:text-5xl 
                            font-bold 
                            text-gray-800 
                            mb-6
                            gradient-text
                        ">
                            Professional Journey
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                onClick={() => setActiveExperience(index)}
                                className={`
                                    flex 
                                    items-center 
                                    space-x-4 
                                    p-4 
                                    rounded-lg 
                                    cursor-pointer 
                                    transition-all 
                                    duration-300
                                    ${activeExperience === index 
                                        ? 'bg-brand-50 shadow-md' 
                                        : 'hover:bg-gray-50'}
                                `}
                            >
                                <div className="
                                    w-16 
                                    h-16 
                                    bg-gray-100 
                                    rounded-full 
                                    flex 
                                    items-center 
                                    justify-center
                                    p-3
                                    shadow-md
                                    transition-transform
                                    duration-300
                                    hover:scale-110
                                ">
                                    <img 
                                        src={exp.logo} 
                                        alt={`${exp.company} Logo`} 
                                        className="
                                            w-full 
                                            h-full 
                                            object-contain
                                        "
                                    />
                                </div>
                                <div>
                                    <h3 className={`
                                        text-xl 
                                        font-semibold 
                                        transition-colors 
                                        duration-300
                                        ${activeExperience === index 
                                            ? 'text-brand-600' 
                                            : 'text-gray-800'}
                                    `}>
                                        {exp.company}
                                    </h3>
                                    <p className="
                                        text-gray-600 
                                        text-sm
                                    ">
                                        {exp.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Details */}
                <motion.div 
                    key={activeExperience}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.6,
                        type: "tween",
                        ease: "easeInOut"
                    }}
                    className="
                        bg-white 
                        rounded-2xl 
                        shadow-elegant-lg 
                        p-8 
                        space-y-6
                    "
                >
                    <div className="
                        relative 
                        mb-6
                        group
                    ">
                        <div className="
                            w-full 
                            h-64 
                            rounded-2xl 
                            overflow-hidden 
                            shadow-elegant-md
                            transition-all 
                            duration-500
                            group-hover:scale-[1.02]
                            group-hover:shadow-elegant-xl
                        ">
                            <img 
                                src={experiences[activeExperience].companyImage} 
                                alt={`${experiences[activeExperience].company} Workspace`}
                                className="
                                    w-full 
                                    h-full 
                                    object-cover 
                                    object-center
                                    transition-transform 
                                    duration-500
                                    group-hover:scale-110
                                "
                            />
                            <div className="
                                absolute 
                                inset-0 
                                bg-gradient-to-b 
                                from-transparent 
                                to-black/50 
                                opacity-0 
                                group-hover:opacity-100 
                                transition-opacity 
                                duration-500
                            "/>
                        </div>
                    </div>

                    <div>
                        <h3 className="
                            text-2xl 
                            font-bold 
                            text-gray-800 
                            mb-2
                        ">
                            {experiences[activeExperience].company}
                        </h3>
                        <p className="
                            text-lg 
                            text-gray-600 
                            mb-4
                        ">
                            {experiences[activeExperience].role}
                        </p>
                        <p className="
                            text-sm 
                            text-gray-500 
                            bg-gray-50 
                            px-3 
                            py-1 
                            rounded-full 
                            inline-block
                        ">
                            {experiences[activeExperience].period}
                        </p>
                    </div>

                    <ul className="
                        space-y-3 
                        text-gray-700 
                        list-none
                    ">
                        {experiences[activeExperience].description.map((item, index) => (
                            <motion.li 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    type: "tween",
                                    ease: "easeInOut"
                                }}
                                className="
                                    flex 
                                    items-start 
                                    space-x-3
                                "
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="
                                        h-5 
                                        w-5 
                                        text-brand-500 
                                        flex-shrink-0 
                                        mt-1
                                    " 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
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
        </section>
    );
}
