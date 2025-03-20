"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CodeIcon, Lightbulb, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-accent" />,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to develop unique solutions that stand out."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Focus",
    description:
      "Laser-focused on creating products that address genuine user needs."
  },
  {
    icon: <CodeIcon className="w-6 h-6 text-secondary" />,
    title: "Excellence",
    description:
      "Committed to technical excellence and best practices in all products."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-highlight" />,
    title: "Growth",
    description:
      "Building scalable solutions that grow alongside user needs."
  }
];

export default function About() {
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-2">About Us</span>
            <h2 className="heading-2 mb-6">
              Building the <span className="text-gradient">Future</span> of Technology
            </h2>
            <p className="text-foreground/80 mb-6">
              Taylor Labs was founded with a vision to create technology solutions that make a real impact. 
              As a product innovation company, we identify problems worth solving and build elegant, 
              user-focused applications that address those challenges.
            </p>
            <p className="text-foreground/80 mb-6">
              Led by Evan Taylor, our team combines technical expertise with creative thinking
              to develop products that stand out in today's crowded tech landscape. We're passionate
              about building tools that simplify complex processes and enhance productivity.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-5 bg-white dark:bg-dark-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-5 -left-5 w-20 h-20 bg-primary-100 dark:bg-primary-900/20 rounded-2xl" 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -bottom-5 -right-5 w-16 h-16 bg-accent/10 rounded-full" 
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main image placeholder - replace with actual founder image */}
            <div className="relative z-10 border-8 border-white dark:border-dark-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <p className="text-lg font-medium">
                    [Founder image or company illustration would go here]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 