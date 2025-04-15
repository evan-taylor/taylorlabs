import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Layers, Mail, MapPin, Twitter, Linkedin, Coffee } from 'lucide-react';
import { FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiPostgresql, SiTypescript, SiSvelte } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Code className="w-16 h-16 text-cyan-400" />
          </motion.div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 leading-tight"
        >
          Taylor Labs
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-center text-gray-300 max-w-2xl mx-auto"
        >
          Transforming innovative ideas into impactful software solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center"
          >
            View Our Products <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.header>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Software Development</h3>
                  <p className="text-gray-300">
                    We create intuitive, high-performance applications for Mac, iOS, and other platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Layers className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Product Innovation</h3>
                  <p className="text-gray-300">
                    We transform ideas into polished products with a focus on user experience and elegant design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            🧰 What We're Good At
          </h2>
          <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Our expertise spans the full stack, with a focus on crafting beautiful, high-performance interfaces and robust backend systems.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <SkillIcon icon={<FaReact className="text-[#61DAFB]" />} name="React" />
            <SkillIcon icon={<SiNextdotjs />} name="Next.js" />
            <SkillIcon icon={<SiSvelte className="text-[#FF3E00]" />} name="Svelte" />
            <SkillIcon icon={<SiSupabase className="text-[#3ECF8E]" />} name="Supabase" />
            <SkillIcon icon={<SiPostgresql className="text-[#336791]" />} name="PostgreSQL" />
            <SkillIcon icon={<SiTypescript className="text-[#3178C6]" />} name="TypeScript" />
            <SkillIcon icon={<FaPython className="text-[#3776AB]" />} name="Python" />
            <SkillIcon icon={<FaJava className="text-[#007396]" />} name="Java" />
            <SkillIcon icon={<FaNodeJs className="text-[#339933]" />} name="Node.js" />
            <SkillIcon icon={<FaGitAlt className="text-[#F05032]" />} name="Git" />
            <SkillIcon icon={<FaFigma className="text-[#F24E1E]" />} name="Figma" />
            <SkillIcon icon="🚀" name="DevOps" />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            🧑‍💼 The Backstory
          </h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="animated-border-box glass-effect p-6 text-center"
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Taylor Labs was founded by Evan Taylor, a Computer Science student at California Polytechnic State University (Cal Poly) 
              with a passion for building things. Our goal: to create applications that solve real-world problems while maintaining 
              a focus on beautiful design and exceptional functionality.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            Our Products
          </h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="animated-border-box glass-effect p-6 mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">SoundSnooze</h3>
            <p className="text-gray-300 mb-4">
              Automatically mutes your Mac when you step away, preventing embarrassing audio leaks.
            </p>
            <Link
              to="/soundsnooze"
              className="inline-flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transform transition hover:scale-105 cursor-pointer"
            >
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            📬 Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">
                    Have questions or want to collaborate?
                  </p>
                  <a 
                    href="mailto:hello@taylorlabs.co" 
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    hello@taylorlabs.co
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPin className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">
                    Based in San Luis Obispo, California<br />
                    Working with people everywhere!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mt-10"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://twitter.com/evantaylor1104" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] hover:bg-[#1a94da] p-4 rounded-full transform transition hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/evan-l-taylor" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] hover:bg-[#0958a7] p-4 rounded-full transform transition hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://buymeacoffee.com/evan.taylor" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFDD00] hover:bg-[#e6c700] p-4 rounded-full transform transition hover:scale-110"
            >
              <Coffee className="w-6 h-6 text-[#0F1011]" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Taylor Labs, LLC. All rights reserved.</p>
        <p className="mt-2">
          2261 Market Street #86329<br />
          San Francisco, CA 94114
        </p>
      </footer>
    </div>
  );
}

interface SkillIconProps {
  icon: React.ReactNode | string;
  name: string;
}

function SkillIcon({ icon, name }: SkillIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-3xl md:text-4xl text-white mb-2">
        {typeof icon === 'string' ? <span>{icon}</span> : icon}
      </div>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </motion.div>
  );
}

export default Home; 