"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Swimming } from "lucide-react";

const projects = [
  {
    id: "swimtrackr",
    title: "SwimTrackr",
    shortDescription: "Digital swim lesson progress tracker",
    description:
      "SwimTrackr is a comprehensive digital solution designed to streamline communication between swim instructors, facilities, and parents. It tracks student progress, provides real-time updates, and helps facilities manage their swim lesson programs more efficiently.",
    icon: <Swimming className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400",
    features: [
      "Real-time progress tracking",
      "Digital skill checklists",
      "Parent communication portal",
      "Facility management dashboard",
      "Automated progress reports",
    ],
    status: "In Development",
  },
  {
    id: "clendr",
    title: "Clendr",
    shortDescription: "AI-powered calendar and task manager",
    description:
      "Clendr is an intelligent calendar client that uses AI to optimize scheduling and task management. It automatically blocks time for tasks, analyzes your productivity patterns, and helps you make the most of your day with smart scheduling suggestions.",
    icon: <Calendar className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
    features: [
      "AI task blocking",
      "Smart schedule optimization",
      "Productivity analytics",
      "Seamless calendar integration",
      "Intuitive task management",
    ],
    status: "Alpha Testing",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block text-primary font-semibold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.span>
          <motion.h2 
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Innovative Solutions for Real Problems
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Taylor Labs, we're building the next generation of tools that solve genuine 
            problems and create exceptional user experiences.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Project navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => setActiveProject(project.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeProject === project.id
                      ? "bg-white dark:bg-dark-800 shadow-md"
                      : "hover:bg-white/50 dark:hover:bg-dark-800/50"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${project.color} text-white mr-4`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-foreground/70 text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                    {activeProject === project.id && (
                      <motion.div
                        className="ml-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="text-primary" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Project details */}
          <motion.div 
            className="lg:col-span-8"
            key={activeProject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl">
              {/* Project image placeholder */}
              <div className={`h-64 bg-gradient-to-r ${currentProject?.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-2xl font-bold">{currentProject?.title}</div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm">
                  {currentProject?.status}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{currentProject?.title}</h3>
                <p className="text-foreground/80 mb-6">
                  {currentProject?.description}
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {currentProject?.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 