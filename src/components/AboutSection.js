"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skills = [
        "Web Development",
        "WordPress Customization",
        "Full Stack Solutions",
        "Responsive Design",
        "Performance Optimization",
        "API Integration"
    ];

    return (
        <section 
            id="about" 
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
                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="
                        flex 
                        justify-center 
                        items-center 
                        group
                    "
                >
                    <div className="
                        relative 
                        w-80 
                        h-80 
                        rounded-3xl 
                        overflow-hidden 
                        shadow-elegant-xl
                        transition-all 
                        duration-500
                        group-hover:scale-105
                        group-hover:shadow-2xl
                    ">
                        <Image
                            src="/images/profile-photo.jpeg"
                            alt="Samad Aman Professional Photo"
                            fill
                            priority
                            sizes="(max-width: 768px) 320px, 400px"
                            className="
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
                </motion.div>

                {/* Content Section */}
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
                            About Me
                        </h2>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="
                            text-lg 
                            text-gray-600 
                            mb-6 
                            leading-relaxed
                        ">
                            I'm a passionate Full Stack Developer with a keen eye for creating innovative digital solutions. My journey in web development is driven by a love for solving complex problems and crafting seamless user experiences.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="
                            text-2xl 
                            font-semibold 
                            text-gray-700 
                            mb-4
                        ">
                            My Expertise
                        </h3>
                        <div className="
                            grid 
                            grid-cols-2 
                            gap-4
                        ">
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                    className="
                                        flex 
                                        items-center 
                                        text-gray-600 
                                        space-x-3
                                        bg-gray-100 
                                        px-4 
                                        py-2 
                                        rounded-lg 
                                        hover:bg-brand-50 
                                        transition-colors 
                                        duration-300
                                    "
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 text-brand-500" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                    <span>{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="
                            flex 
                            space-x-4 
                            mt-8
                        ">
                            <a 
                                href="https://fabulous-goldenrod-825.notion.site/SamadAmanCv-1a06aa8fa40e801eb766dbc5a50e7206?pvs=73" 
                                target="_blank"
                                className="
                                    px-6 
                                    py-3 
                                    bg-brand-500 
                                    text-white 
                                    rounded-lg 
                                    hover:bg-brand-600 
                                    transition-colors 
                                    duration-300 
                                    flex 
                                    items-center
                                "
                            >
                                Download CV
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 ml-2" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
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
