import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, UserCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper component for animated numbers
const AnimatedNumber = ({ value, suffix = '' }) => {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => 
    `${Math.round(current)}${suffix}`
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 bg-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Red Glow Effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-700/5 dark:bg-red-700/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* 3D Animated Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-12 flex justify-center relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-red-500/20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-red-400/30"
              />
              
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl rotate-45 shadow-[0_0_50px_rgba(220,38,38,0.4)] flex items-center justify-center overflow-hidden border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  <ShieldCheck size={48} className="text-white -rotate-45 relative z-10 w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px]"
              >
                <div className="w-8 h-8 bg-background border border-border shadow-sm rounded-full absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <UserCheck size={14} className="text-red-500" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px]"
              >
                 <div className="w-8 h-8 bg-background border border-border shadow-sm rounded-full absolute top-1/2 -right-4 -translate-y-1/2 flex items-center justify-center">
                  <Lock size={14} className="text-red-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-foreground"
          >
            Professional Staffing
            <span className="block text-red-500 mt-2">& Security Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end service excellence. From highly trained security guards to professional housekeeping and waiter staff, E2E Services delivers reliability you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-base font-medium group"
            >
              Hire Us Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-foreground/20 hover:border-red-500 hover:bg-red-500/10 px-8 py-6 text-base font-medium"
            >
              Our Services
            </Button>
          </motion.div>

          {/* Floating Stats with Counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2 flex items-center justify-center">
                <AnimatedNumber value={100} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Reliable Staff</div>
            </div>
            
            <div className="text-center">
               <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2 flex items-center justify-center">
                 <AnimatedNumber value={500} suffix="+" />
               </div>
               <div className="text-sm text-muted-foreground uppercase tracking-wider">Trusted By Clients</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Availability</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">Premium</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Quality Service</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
