import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { alt: 'Security Guard on Duty', description: 'Professional security guard monitoring premises', src: 'https://images.unsplash.com/photo-1590248408169-23e0c5c3e497' },
    { alt: 'Fine Dining Waiter Service', description: 'Expert waiter serving guests at a high-end event', src: 'https://images.unsplash.com/photo-1592750692791-0309990cc112' },
    { alt: 'Professional Housekeeping Staff', description: 'Meticulous housekeeping team cleaning a hotel room', src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a' },
    { alt: 'Event Security Team', description: 'Security team coordinating at a large public event', src: 'https://images.unsplash.com/photo-1555431189-0fabf2667795' },
    { alt: 'Hospitality Staff Briefing', description: 'Staff briefing before a major gala dinner', src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205' },
    { alt: 'Commercial Cleaning Service', description: 'Detailed cleaning of office spaces', src: 'https://images.unsplash.com/photo-1581578731117-10d52187b583' },
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(128,128,128,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Service Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See our professionals in action across Security, Hospitality, and Housekeeping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group rounded-lg shadow-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={image.alt}
                src={image.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-bold">{image.alt}</p>
                  <p className="text-gray-300 text-sm mt-1">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg border border-white/10" 
                alt={images[selectedImage].alt}
                src={images[selectedImage].src}
              />
              <div className="mt-4 text-center">
                 <h3 className="text-xl font-bold text-white">{images[selectedImage].alt}</h3>
                 <p className="text-gray-400">{images[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
