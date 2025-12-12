import React from 'react';
import { motion } from 'framer-motion';
import { Shield, UserCheck, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Guard Services',
      description: 'Professional, highly-trained security personnel dedicated to protecting your property, assets, and people. Our guards provide vigilance, rapid response, and peace of mind for residential and commercial premises.',
    },
    {
      icon: UserCheck,
      title: 'Waiter Services',
      description: 'Expert staffing for your events and dining establishments. Our waiters are trained in hospitality etiquette, ensuring your guests receive impeccable service with professionalism and a smile.',
    },
    {
      icon: Sparkles,
      title: 'Housekeeping Services',
      description: 'Comprehensive cleaning and maintenance solutions. Our meticulous housekeeping staff ensures your environment remains pristine, hygienic, and welcoming, tailored to your specific schedules and standards.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We value your need for quality, reliability, and excellence in service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card dark:bg-white/5 border border-border dark:border-white/10 hover:border-red-500/50 p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] flex flex-col items-center text-center h-full rounded-lg"
            >
              <div className="mb-8 inline-block">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors border border-red-500/20">
                  <service.icon className="text-red-500" size={40} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-500 group-hover:w-full transition-all duration-500 rounded-b-lg"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
