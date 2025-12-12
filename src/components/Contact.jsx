import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request for email sending
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store in localStorage for data persistence simulation
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Simulate sending email to specified addresses
    console.log("Processing email dispatch to: etoeservice@gmail.com, contactus@e2e-services.com");
    console.log("Email Payload:", formData);

    toast({
      title: "Request Sent Successfully!",
      description: "We have received your message. A confirmation has been sent to etoeservice@gmail.com and contactus@e2e-services.com (simulated).",
      variant: "default",
    });

    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: (
        <div className="flex flex-col gap-1">
          <a href="mailto:etoeservice@gmail.com" className="hover:text-red-500 transition-colors">etoeservice@gmail.com</a>
          <a href="mailto:contactus@e2e-services.com" className="hover:text-red-500 transition-colors">contactus@e2e-services.com</a>
        </div>
      )
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: (
        <div className="flex flex-col gap-1">
          <a href="tel:+919845110078" className="hover:text-red-500 transition-colors">+91 9845110078</a>
          <a href="tel:+919113230078" className="hover:text-red-500 transition-colors">+91 9113230078</a>
        </div>
      )
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'San Francisco, CA 94102' 
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to hire professional staff? Contact us for a consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus:border-red-500 text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-input focus:border-red-500 text-foreground"
                    placeholder="+91 9845110078"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-input focus:border-red-500 text-foreground"
                  placeholder="etoeservice@gmail.com"
                />
              </div>
              
              <div>
                <Label htmlFor="serviceType" className="text-foreground mb-2 block">Service Interested In</Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="" className="text-muted-foreground">Select a service...</option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Waiter">Waiter</option>
                  <option value="Housekeeping">Housekeeping</option>
                  <option value="Multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-input focus:border-red-500 text-foreground resize-none"
                  placeholder="Tell us about your staffing needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-base font-medium group"
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center flex-shrink-0 rounded-lg">
                      <item.icon className="text-red-500" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 dark:bg-white/5 border border-border dark:border-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border dark:border-white/10">
                <p className="text-sm text-muted-foreground">
                  24/7 Emergency Support Available for Contracted Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
