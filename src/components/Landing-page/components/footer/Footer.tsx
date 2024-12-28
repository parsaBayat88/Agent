import React from 'react';
import { Mail, Phone, Shield } from 'lucide-react';
import { FooterLink } from './FooterLink';
import { FooterSection } from './FooterSection';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-[#8200fb]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <nav className="space-y-3">
              <div><FooterLink href="/">Home</FooterLink></div>
              <div><FooterLink href="#features">Features</FooterLink></div>
              <div><FooterLink href="#demo">Demo</FooterLink></div>
              <div><FooterLink href="#contact">Contact</FooterLink></div>
            </nav>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#8200fb]" />
                <span>contact@airealty.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#8200fb]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </FooterSection>

          {/* Legal */}
          <FooterSection title="Legal">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-[#8200fb] mt-1" />
                <p className="text-gray-400 text-sm">
                  Your data is safe with us. We use enterprise-grade encryption
                  and follow strict privacy guidelines.
                </p>
              </div>
              <div>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </div>
              <div>
                <FooterLink href="/terms">Terms of Service</FooterLink>
              </div>
            </div>
          </FooterSection>

          {/* Social */}
          <FooterSection title="Connect">
            <div className="space-y-3">
              <p className="text-gray-400">
                Follow us for the latest updates and AI insights in real estate.
              </p>
              <div className="flex space-x-4">
                <FooterLink href="https://twitter.com">Twitter</FooterLink>
                <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AIRealty. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="/sitemap">Sitemap</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}