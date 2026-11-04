import React, { useEffect, useRef, useState } from 'react';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ children, delay = 0, className = '', immediate = false }) => {
  const [isVisible, setIsVisible] = useState(immediate);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      style={immediate ? undefined : { transitionDelay: `${delay}ms` }}
      className={
        immediate
          ? className
          : `transform transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${className}`
      }
    >
      {children}
    </div>
  );
};
