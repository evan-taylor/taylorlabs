import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🧑‍💼 The Backstory</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Taylor Labs is built on a foundation of leadership, problem-solving, and a passion for great user experiences.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 w-0.5 h-full bg-primary-200 dark:bg-primary-700/40 ml-6 md:ml-8">
              <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-muted/50 to-transparent"></div>
            </div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="2023"
                title="Founded Taylor Labs LLC"
                description="Started a tech playground to build solutions that solve real problems with a focus on user experience and elegant code."
                delay={0.1}
              />
              
              <TimelineItem 
                year="2019-2023"
                title="Led Large Aquatics Teams"
                description="Managed and trained large teams of lifeguards and swim instructors, developing leadership and organizational skills."
                delay={0.2}
              />
              
              <TimelineItem 
                year="2018-2022"
                title="Founded Taylored Instruction LLC"
                description="Established a successful tutoring business focusing on mathematics, computer science, and standardized test preparation."
                delay={0.3}
              />
              
              <TimelineItem 
                year="2017"
                title="Created Tech Systems"
                description="Developed custom systems to streamline business operations and improve efficiency across multiple organizations."
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  delay: number;
}

const TimelineItem = ({ year, title, description, delay }: TimelineItemProps) => {
  return (
    <motion.div 
      className="relative pl-14 md:pl-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute left-0 rounded-full w-12 h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 flex items-center justify-center text-primary-800 dark:text-primary-300 font-medium text-sm">
        {year}
      </div>
      
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default AboutSection; 