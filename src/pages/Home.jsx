import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import { Button } from '@/ui/button';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure render
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      
      {/* Mini Gallery Teaser */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950 text-center relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
           >
              <h2 className="text-3xl font-bold mb-4">See Our Team in Action</h2>
              <p className="text-muted-foreground mb-8">Browse our extensive gallery of professional staff and service executions.</p>
              <Link to="/gallery">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white gap-2">
                  View Full Gallery <ImageIcon size={18} />
                </Button>
              </Link>
           </motion.div>
         </div>
      </section>

      <Resources />
      <Contact />
    </>
  );
};

export default Home;
