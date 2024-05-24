// useIntersectionObserver.ts
import { RefObject, useEffect } from 'react';

const UseIntersectionObserverSlide = (ref: RefObject<Element>,
    callback: (isVisible: boolean) => void,
    options: IntersectionObserverInit) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    callback(true); // Trigger the slide-in animation
                    observer.disconnect(); // Optional: Disconnect after first intersection
                }
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, callback, options]);
}

export default UseIntersectionObserverSlide;
