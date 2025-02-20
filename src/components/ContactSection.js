"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    });
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        
        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        // Message validation
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters long';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear specific field error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Construct mailto link
        const { name, email, message } = formData;
        const mailtoLink = `mailto:amansamad2500@gmail.com?subject=Portfolio%20Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Reset form after opening email client
        setFormData({
            name: '',
            email: '',
            message: ''
        });

        // Show success message
        setFormStatus({
            isSubmitting: false,
            isSubmitted: true,
            error: null
        });

        // Auto-hide success message after 3 seconds
        setTimeout(() => {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                error: null
            });
        }, 3000);
    };

    return (
        <section 
            id="contact" 
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
                max-w-4xl 
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
                    Get In Touch
                </h2>

                <div className="
                    grid 
                    md:grid-cols-2 
                    gap-12
                    items-center
                ">
                    {/* Contact Information */}
                    <div className="
                        space-y-6
                        text-gray-700
                        animate-slide-in-up
                        opacity-0
                        animation-delay-500
                    ">
                        <div>
                            <h3 className="
                                text-2xl 
                                font-semibold 
                                text-gray-800 
                                mb-4
                            ">
                                Contact Details
                            </h3>
                            <p>Feel free to reach out for collaboration or opportunities.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 text-brand-500" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                                <span>amansamad2500@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 text-brand-500" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h3m-3-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                                    />
                                </svg>
                                <span>+91 9128198365</span>
                            </div>
                        </div>

                        <div className="
                            flex 
                            space-x-4
                        ">
                            {['github', 'twitter', 'linkedin'].map((platform) => (
                                <a 
                                    key={platform}
                                    href={
                                        platform === 'github' 
                                            ? "https://github.com/samadaman" 
                                            : platform === 'twitter' 
                                            ? "https://twitter.com/samadaman" 
                                            : "https://www.linkedin.com/in/samadaman/"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-700
                                        hover:text-brand-500
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="currentColor"
                                    >
                                        {platform === 'github' && (
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        )}
                                        {platform === 'linkedin' && (
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        )}
                                        {platform === 'twitter' && (
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form 
                        onSubmit={handleSubmit}
                        className="
                            bg-white 
                            shadow-elegant-lg 
                            rounded-2xl 
                            p-8 
                            border 
                            border-gray-200
                            space-y-6
                            animate-slide-in-up
                            opacity-0
                            animation-delay-700
                        "
                    >
                        {/* Name Input */}
                        <div>
                            <label 
                                htmlFor="name" 
                                className="
                                    block 
                                    text-gray-700 
                                    mb-2
                                "
                            >
                                Name
                            </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`
                                    w-full 
                                    px-4 
                                    py-3 
                                    bg-gray-100 
                                    border 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:ring-2 
                                    text-gray-800
                                    ${formErrors.name 
                                        ? 'border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:ring-brand-500'}
                                `}
                                placeholder="Your Name"
                            />
                            {formErrors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label 
                                htmlFor="email" 
                                className="
                                    block 
                                    text-gray-700 
                                    mb-2
                                "
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`
                                    w-full 
                                    px-4 
                                    py-3 
                                    bg-gray-100 
                                    border 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:ring-2 
                                    text-gray-800
                                    ${formErrors.email 
                                        ? 'border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:ring-brand-500'}
                                `}
                                placeholder="your.email@example.com"
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors.email}
                                </p>
                            )}
                        </div>

                        {/* Message Input */}
                        <div>
                            <label 
                                htmlFor="message" 
                                className="
                                    block 
                                    text-gray-700 
                                    mb-2
                                "
                            >
                                Message
                            </label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className={`
                                    w-full 
                                    px-4 
                                    py-3 
                                    bg-gray-100 
                                    border 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:ring-2 
                                    text-gray-800
                                    ${formErrors.message 
                                        ? 'border-red-500 focus:ring-red-500' 
                                        : 'border-gray-300 focus:ring-brand-500'}
                                `}
                                placeholder="Your Message"
                            />
                            {formErrors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors.message}
                                </p>
                            )}
                        </div>

                        {/* Submission Status */}
                        {formStatus.isSubmitted && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="
                                    bg-green-100 
                                    text-green-800 
                                    p-4 
                                    rounded-lg 
                                    text-center
                                "
                            >
                                Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}

                        {formStatus.error && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="
                                    bg-red-100 
                                    text-red-800 
                                    p-4 
                                    rounded-lg 
                                    text-center
                                "
                            >
                                {formStatus.error}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={formStatus.isSubmitting}
                            className="
                                w-full 
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
                                justify-center
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >
                            {formStatus.isSubmitting ? (
                                <div className="flex items-center">
                                    <svg 
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                        <circle 
                                            className="opacity-25" 
                                            cx="12" 
                                            cy="12" 
                                            r="10" 
                                            stroke="currentColor" 
                                            strokeWidth="4"
                                        ></circle>
                                        <path 
                                            className="opacity-75" 
                                            fill="currentColor" 
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </div>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
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
                    bg-blue-500 
                    rounded-full 
                    blur-3xl 
                    animate-gradient-shift 
                    top-12 -left-12
                "></div>
                <div className="
                    absolute 
                    w-96 h-96 
                    bg-purple-500 
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
