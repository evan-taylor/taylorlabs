import { motion } from 'framer-motion';
import ProjectCard from './project-card';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚧 What We're Building</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're the creative engine behind smart, user-focused tools that aim to make life a little easier (and a lot cooler).
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Clendr"
            subtitle="Your smart calendar sidekick"
            description="Clendr uses AI to actually help you manage your time—not just show you how little of it you have."
            icon="🧠"
            features={[
              "Learns your preferences & routines over time 🤖",
              "Syncs across devices and platforms 🔄",
              "Built with cutting-edge AI and sleek design 💻"
            ]}
            accentColor="from-primary-500/20 to-primary-500/5"
          />
          
          <ProjectCard 
            title="SwimTrackr"
            subtitle="Making waves in swim lesson tracking"
            description="SwimTrackr helps parents and aquatics pros track swim progress in real time."
            icon="🏊‍♂️"
            features={[
              "Full-stack app: React + TypeScript + Supabase 🧩",
              "Role-based access (because not everyone needs to see everything) 🔐",
              "Real-time updates so everyone's in the loop 📲"
            ]}
            accentColor="from-secondary-500/20 to-secondary-500/5"
          />
          
          <ProjectCard 
            title="Auxos"
            subtitle="A habit + productivity app powered by community vibes"
            description="Auxos is all about accountability—not shame. Gamify your goals, rally your crew, and stay on track together."
            icon="🔥"
            features={[
              "Built with Next.js + TypeScript 💡",
              "Join or create accountability groups 👯",
              "Streaks, check-ins, and a sleek dashboard 📊"
            ]}
            accentColor="from-red-500/20 to-red-500/5"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 