'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'urgent';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-semibold rounded-full
      transition-all duration-300 ease-out
      focus-visible:ring-2 focus-visible:ring-amber-primary focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      active:scale-[0.98]
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-amber-primary to-amber-light text-slate-deep
        hover:from-amber-light hover:to-amber-primary
        shadow-lg shadow-amber-primary/25 hover:shadow-xl hover:shadow-amber-primary/30
      `,
      secondary: `
        bg-gradient-to-r from-slate-deep to-slate-dark text-white
        hover:from-slate-dark hover:to-slate-medium
        shadow-lg shadow-slate-dark/25 hover:shadow-xl hover:shadow-slate-dark/30
      `,
      outline: `
        border-2 border-slate-dark text-slate-dark bg-transparent
        hover:bg-slate-dark hover:text-white
      `,
      ghost: `
        text-slate-dark bg-transparent
        hover:bg-slate-dark/5
      `,
      urgent: `
        bg-gradient-to-r from-red-600 to-red-500 text-white
        hover:from-red-500 hover:to-red-400
        shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30
        animate-urgent-pulse
      `,
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
