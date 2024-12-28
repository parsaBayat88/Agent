import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg';
  const glowStyles = 'before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300';
  
  const variants = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-600 before:bg-cyan-500/20 hover:before:blur-xl',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600 before:bg-purple-500/20 hover:before:blur-xl'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${glowStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}