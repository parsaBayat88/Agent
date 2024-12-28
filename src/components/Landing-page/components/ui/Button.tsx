import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    primary: 'bg-[#8200fb] text-white hover:bg-[#9500ff] before:bg-[#8200fb]/20 hover:before:blur-xl',
    secondary: 'bg-cyan-500 text-white hover:bg-cyan-600 before:bg-cyan-500/20 hover:before:blur-xl',
    outline: 'border-2 border-[#8200fb] text-white hover:bg-[#8200fb]/10',
    ghost: 'border-2 border-cyan-500 text-white hover:bg-cyan-500/10'
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