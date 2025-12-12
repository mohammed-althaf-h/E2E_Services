import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Security Guard', 'Waiter Services', 'Housekeeping', 'Event Staffing'],
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Resources: ['Service Guide', 'Client Testimonials', 'FAQ', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="bg-background border-t border-border dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://horizons-cdn.hostinger.com/056d1786-dbe9-4721-b9ad-633ef1879cb2/d3c8be6cdf3ff33b7db707445c175808.png" 
                    alt="E2E Services Logo" 
                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:filter dark:invert dark:hue-rotate-180" 
                  />
               </div>
              <div>
                <span className="text-xl font-bold tracking-wider block text-foreground">E2E SERVICES</span>
                <span className="text-xs text-red-500 font-medium tracking-widest uppercase">We value your Need</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for professional security, hospitality staffing, and housekeeping services. Delivering excellence from end to end.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-border dark:border-white/10 hover:border-red-500 flex items-center justify-center hover:bg-red-500/10 transition-all group rounded-full"
                >
                  <Icon size={18} className="text-muted-foreground group-hover:text-red-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span className="text-foreground font-bold mb-4 block text-lg">{category}</span>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-red-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border dark:border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <p className="text-muted-foreground text-sm">
              © {currentYear} E2E Services. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
               <div className="flex items-start sm:items-center gap-2">
                 <Mail size={14} className="text-red-500 mt-1 sm:mt-0" />
                 <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                   <a href="mailto:etoeservice@gmail.com" className="hover:text-red-500 transition-colors">etoeservice@gmail.com</a>
                   <a href="mailto:contactus@e2e-services.com" className="hover:text-red-500 transition-colors hidden sm:block">contactus@e2e-services.com</a>
                   <a href="mailto:contactus@e2e-services.com" className="hover:text-red-500 transition-colors sm:hidden">contactus@e2e-services.com</a>
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <Phone size={14} className="text-red-500" />
                 <div className="flex gap-2">
                    <a href="tel:+919845110078" className="hover:text-red-500 transition-colors">+91 9845110078</a>
                    <span className="hidden sm:inline">|</span>
                    <a href="tel:+919113230078" className="hover:text-red-500 transition-colors">+91 9113230078</a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
