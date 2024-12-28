import React from 'react';
import { Menu } from 'lucide-react';

export function Navigation() {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}