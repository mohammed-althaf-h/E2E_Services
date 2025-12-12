import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Resources = () => {
  const { toast } = useToast();

  const resources = [
    {
      title: 'Security Staffing Protocols',
      description: 'Comprehensive guide covering our rigorous security personnel training and deployment standards.',
      type: 'PDF',
      size: '2.4 MB',
    },
    {
      title: 'Hospitality Service Standards',
      description: 'Detailed overview of our waiter and event staff etiquette and service guidelines.',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      title: 'Housekeeping Checklist',
      description: 'Our standard operating procedures for commercial and residential cleaning excellence.',
      type: 'PDF',
      size: '3.1 MB',
    },
    {
      title: 'Compliance & Safety',
      description: 'Documentation on our adherence to labor laws, safety regulations, and insurance coverage.',
      type: 'PDF',
      size: '2.2 MB',
    },
    {
      title: 'Client Success Stories',
      description: 'Case studies showcasing our staffing solutions for major events and secure facilities.',
      type: 'PDF',
      size: '4.5 MB',
    },
    {
      title: 'Service Rate Card',
      description: 'General pricing structure for our security, waiter, and housekeeping services.',
      type: 'PDF',
      size: '1.9 MB',
    },
  ];

  const handleDownload = (resourceTitle) => {
    toast({
      title: "🚧 Feature Coming Soon",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="resources" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Resource Library</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Download our guides, standards, and service documentation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card dark:bg-white/5 border border-border dark:border-white/10 hover:border-red-500/50 p-6 transition-all duration-300 rounded-lg shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors rounded-lg">
                  <FileText className="text-red-500" size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{resource.type}</span>
              </div>

              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-red-500 transition-colors">
                {resource.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {resource.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{resource.size}</span>
                <Button
                  onClick={() => handleDownload(resource.title)}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-red-500/10 hover:text-red-500 group/btn"
                >
                  <Download size={16} className="mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                  Download
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500 rounded-b-lg"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-6 py-3 text-sm rounded-full">
            <Lock size={16} className="text-red-500" />
            <span className="text-muted-foreground">All resources are secured and regularly updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
