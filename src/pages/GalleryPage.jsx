import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Extended image list for the full gallery page
  const images = [
    { alt: 'Security Guard on Duty', category: 'Security', description: 'Professional security guard monitoring premises', src: 'https://images.unsplash.com/photo-1590248408169-23e0c5c3e497' },
    { alt: 'Fine Dining Waiter Service', category: 'Hospitality', description: 'Expert waiter serving guests at a high-end event', src: 'https://images.unsplash.com/photo-1592750692791-0309990cc112' },
    { alt: 'Professional Housekeeping', category: 'Housekeeping', description: 'Meticulous housekeeping team cleaning a hotel room', src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a' },
    { alt: 'Event Security Team', category: 'Security', description: 'Security team coordinating at a large public event', src: 'https://images.unsplash.com/photo-1555431189-0fabf2667795' },
    { alt: 'Hospitality Briefing', category: 'Hospitality', description: 'Staff briefing before a major gala dinner', src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205' },
    { alt: 'Office Cleaning', category: 'Housekeeping', description: 'Detailed cleaning of office spaces', src: 'https://images.unsplash.com/photo-1581578731117-10d52187b583' },
    { alt: 'Concierge Service', category: 'Hospitality', description: 'Front desk concierge welcoming guests', src: 'https://images.unsplash.com/photo-1560920452-aa71aa630950' },
    { alt: 'CCTV Monitoring', category: 'Security', description: '24/7 Surveillance monitoring center', src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9' },
    { alt: 'Deep Cleaning', category: 'Housekeeping', description: 'Specialized deep cleaning equipment in use', src: 'https://images.unsplash.com/photo-1527515664-6277754391b0' },
    { alt: 'VIP Protection', category: 'Security', description: 'Personal protection officer escorting client', src: 'https://images.unsplash.com/photo-1620509652876-b6ae375494d2' },
    { alt: 'Hotel Room Setup', category: 'Housekeeping', description: 'Perfectly arranged hotel room amenities', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd' },
    { alt: 'Bartending Service', category: 'Hospitality', description: 'Professional bartender crafting cocktails', src: 'https://images.unsplash.com/photo-1574096079513-d82599602950' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
              A visual tour of our excellence in Security, Hospitality, and Maintenance services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md border border-border dark:border-white/10 ${
                   index % 3 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2 block">{image.category}</span>
                     <h3 className="text-white text-lg font-bold">{image.alt}</h3>
                     <p className="text-white/80 text-sm mt-1 line-clamp-2">{image.description}</p>
                   </div>
                   <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <ZoomIn size={24} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors z-50 p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full relative max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                    className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
                    alt={images[selectedImage].alt}
                    src={images[selectedImage].src}
                />
              </div>
              <div className="mt-6 text-center text-white">
                 <h3 className="text-2xl font-bold mb-2">{images[selectedImage].alt}</h3>
                 <p className="text-gray-300">{images[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
