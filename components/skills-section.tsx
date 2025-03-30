import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiPostgresql, SiTypescript, SiSvelte } from 'react-icons/si';

interface SkillProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

const Skill = ({ icon, name, delay }: SkillProps) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-3xl md:text-4xl text-foreground/80 mb-2">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🧰 What We're Good At</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans the full stack, with a focus on crafting beautiful, high-performance interfaces and robust backend systems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          <Skill icon={<FaReact className="text-[#61DAFB]" />} name="React" delay={0.1} />
          <Skill icon={<SiNextdotjs />} name="Next.js" delay={0.15} />
          <Skill icon={<SiSvelte className="text-[#FF3E00]" />} name="Svelte" delay={0.2} />
          <Skill icon={<SiSupabase className="text-[#3ECF8E]" />} name="Supabase" delay={0.25} />
          <Skill icon={<SiPostgresql className="text-[#336791]" />} name="PostgreSQL" delay={0.3} />
          <Skill icon={<SiTypescript className="text-[#3178C6]" />} name="TypeScript" delay={0.35} />
          <Skill icon={<FaPython className="text-[#3776AB]" />} name="Python" delay={0.4} />
          <Skill icon={<FaJava className="text-[#007396]" />} name="Java" delay={0.45} />
          <Skill icon={<FaNodeJs className="text-[#339933]" />} name="Node.js" delay={0.5} />
          <Skill icon={<FaGitAlt className="text-[#F05032]" />} name="Git" delay={0.55} />
          <Skill icon={<FaFigma className="text-[#F24E1E]" />} name="Figma" delay={0.6} />
          <Skill icon={<span className="text-2xl">🚀</span>} name="DevOps" delay={0.65} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 