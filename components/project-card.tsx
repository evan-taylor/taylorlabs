import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  className?: string;
  accentColor?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  features,
  icon,
  className,
  accentColor = 'from-primary-500/20 to-primary-500/5',
}: ProjectCardProps) => {
  return (
    <motion.div 
      className={cn(
        "relative group rounded-xl border overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity -z-10",
        accentColor
      )} />
      
      <div className="p-6 md:p-8">
        <div className="text-3xl mb-4">{icon}</div>
        
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        
        <p className="mb-6">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-primary-500 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 