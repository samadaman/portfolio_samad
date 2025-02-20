"use client";

import React from "react";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
            { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
            { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-teal-600" },
            { name: "TypeScript", level: 50, color: "from-blue-600 to-blue-700" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
            { name: "Express", level: 80, color: "from-gray-600 to-gray-700" },
            { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
            { name: "MySQL", level: 80, color: "from-pink-500 to-pink-600" }
        ]
    },
    {
        title: "WordPress",
        skills: [
            { name: "Theme Development", level: 90, color: "from-blue-600 to-blue-700" },
            { name: "Plugin Customization", level: 85, color: "from-indigo-500 to-indigo-600" },
            { name: "WooCommerce", level: 80, color: "from-purple-500 to-purple-600" },
            { name: "Performance Optimization", level: 75, color: "from-teal-500 to-teal-600" }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section 
            id="skills" 
            className="
                min-h-screen 
                flex items-center 
                text-gray-900 
                justify-center 
                px-4 sm:px-8 md:px-16 lg:px-24 
                py-24
                bg-white
                relative
                overflow-hidden
            "
        >
            {/* Decorative Background */}
            <div className="
                absolute 
                top-0 
                left-0 
                right-0 
                bottom-0 
                pointer-events-none 
                opacity-10
            ">
                <div className="
                    absolute 
                    w-96 
                    h-96 
                    bg-brand-500 
                    rounded-full 
                    blur-3xl 
                    animate-gradient-shift 
                    top-12 
                    -left-12
                "></div>
                <div className="
                    absolute 
                    w-96 
                    h-96 
                    bg-brand-700 
                    rounded-full 
                    blur-3xl 
                    animate-gradient-shift 
                    animation-delay-2000 
                    bottom-12 
                    -right-12
                "></div>
            </div>

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
                    gradient-text
                ">
                    My Skills
                </h2>

                <div className="
                    grid 
                    md:grid-cols-3 
                    gap-8
                ">
                    {skillCategories.map((category, catIndex) => (
                        <div 
                            key={catIndex}
                            className="
                                bg-white 
                                shadow-elegant-lg 
                                rounded-xl 
                                p-6 
                                transform 
                                transition-all 
                                duration-300 
                                hover:shadow-elegant-xl 
                                hover:-translate-y-2
                            "
                        >
                            <h3 className="
                                text-2xl 
                                font-semibold 
                                text-gray-800 
                                mb-6 
                                border-b 
                                pb-3 
                                border-gray-200
                            ">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex} 
                                        className="
                                            flex 
                                            items-center 
                                            space-x-4
                                        "
                                    >
                                        <div className="
                                            flex-grow 
                                            bg-gray-200 
                                            rounded-full 
                                            h-2.5
                                        ">
                                            <div 
                                                className={`
                                                    h-2.5 
                                                    rounded-full 
                                                    bg-gradient-to-r 
                                                    ${skill.color}
                                                `}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <div className="
                                            text-sm 
                                            font-medium 
                                            text-gray-600 
                                            w-24 
                                            text-right
                                        ">
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
