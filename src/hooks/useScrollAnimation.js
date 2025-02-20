import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        animationClass = 'animate-slide-in-up',
        activeClass = 'opacity-100',
        inactiveClass = 'opacity-0 translate-y-10'
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { 
                threshold, 
                rootMargin 
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin]);

    const animationClasses = `
        ${animationClass}
        ${isVisible ? activeClass : inactiveClass}
        transition-all duration-1000 ease-out
    `;

    return { ref, animationClasses };
};

export const withScrollAnimation = (WrappedComponent, customOptions = {}) => {
    return function ScrollAnimatedComponent(props) {
        const scrollAnimation = useScrollAnimation(customOptions);

        return (
            <div 
                ref={scrollAnimation.ref} 
                className={scrollAnimation.animationClasses}
            >
                <WrappedComponent {...props} />
            </div>
        );
    };
};
