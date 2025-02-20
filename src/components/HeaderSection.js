"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderSection() {
    const professionalSummary = [
        "Full Stack Developer specializing in modern web technologies",
        "WordPress Expert with a passion for creating robust digital solutions",
        "UI/UX enthusiast transforming complex ideas into elegant interfaces"
    ];

    const jobTitles = [
        "Full Stack Developer",
        "WordPress Developer"
    ];

    const techStack = [
        { name: "Next.js", icon: "/icons/nextjs-icon.svg" },
        { name: "React", icon: "/icons/react-icon.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind-icon.svg" },
        { name: "WordPress", icon: "/icons/wordpress-icon.svg" },
        { name: "Node.js", icon: "/icons/nodejs-icon.svg" },
        { name: "TypeScript", icon: "/icons/typescript-icon.svg" }
    ];

    const socialLinks = [
        { 
            href: "https://github.com/samadaman", 
            icon: "/icons/github-icon.svg", 
            alt: "GitHub Profile",
            label: "GitHub"
        },
        { 
            href: "https://linkedin.com/in/samadaman", 
            icon: "/icons/linkedin-icon.svg", 
            alt: "LinkedIn Profile",
            label: "LinkedIn"
        },
        { 
            href: "mailto:amansamad2500@gmail.com", 
            icon: "/icons/email-icon.svg", 
            alt: "Email",
            label: "Email"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.7
            }
        }
    };

    const AnimatedText = ({ text }) => {
        return (
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.6,
                    type: "tween",
                    ease: "easeInOut"
                }}
                className="text-brand-500 inline-block"
            >
                {text}
            </motion.span>
        );
    };

    const AnimatedJobTitles = () => {
        const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTitleIndex((prevIndex) => 
                    (prevIndex + 1) % jobTitles.length
                );
            }, 3000);

            return () => clearInterval(interval);
        }, []);

        return (
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                        duration: 0.6,
                        type: "tween",
                        ease: "easeInOut"
                    }}
                    className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6 overflow-hidden"
                >
                    <AnimatedText text={jobTitles[currentTitleIndex]} />
                </motion.div>
            </AnimatePresence>
        );
    };

    return (
        <section 
            id="home"
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
                container 
                mx-auto 
                grid 
                md:grid-cols-2 
                gap-12 
                items-center
            ">
                {/* Left Content */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="
                            text-5xl 
                            md:text-6xl 
                            font-bold 
                            text-gray-800 
                            mb-4
                            gradient-text
                        ">
                            Samad Aman
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <AnimatedJobTitles />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="
                            text-gray-700 
                            text-lg 
                            mb-8 
                            space-y-3
                        ">
                            {professionalSummary.map((summary, index) => (
                                <p key={index} className="flex items-center">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 mr-3 text-brand-500" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path 
                                            fillRule="evenodd" 
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                            clipRule="evenodd" 
                                        />
                                    </svg>
                                    {summary}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex space-x-4">
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

                        <Link 
                            href="#contact"
                            className="
                                px-6 
                                py-3 
                                border 
                                border-brand-500 
                                text-brand-500 
                                rounded-lg 
                                hover:bg-brand-50 
                                transition-colors 
                                duration-300
                            "
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="mt-8">
                            <h3 className="
                                text-lg 
                                font-semibold 
                                text-gray-700 
                                mb-4
                            ">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {techStack.map((tech, index) => (
                                    <div 
                                        key={index} 
                                        className="
                                            bg-gray-100 
                                            p-3 
                                            rounded-lg 
                                            flex 
                                            items-center 
                                            hover:bg-brand-50 
                                            transition-colors 
                                            duration-300
                                        "
                                    >
                                        <Image 
                                            src={tech.icon} 
                                            alt={tech.name} 
                                            width={24} 
                                            height={24} 
                                            className="mr-2"
                                        />
                                        <span className="text-gray-700">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-600 
                                        hover:text-brand-500 
                                        transition-colors 
                                        duration-300
                                    "
                                    aria-label={link.label}
                                >
                                    <Image 
                                        src={link.icon} 
                                        alt={link.alt} 
                                        width={28} 
                                        height={28}
                                    />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="
                        flex 
                        items-center 
                        justify-center 
                        relative
                    "
                >
                    <div className="
                        w-full 
                        max-w-xl 
                        aspect-square 
                        relative 
                        group
                    ">
                        <div className="
                            absolute 
                            -inset-4 
                            bg-brand-100 
                            rounded-full 
                            opacity-50 
                            blur-2xl 
                            group-hover:opacity-75 
                            transition-all 
                            duration-300
                        "/>
                        <Image 
                            src="/images/samad.png" 
                            alt="Samad Aman" 
                            fill
                            priority
                            className="
                                object-cover 
                                object-top 
                                group-hover:scale-105 
                                transition-transform 
                                duration-300
                            "
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
