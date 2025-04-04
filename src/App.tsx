import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Heart, Lightbulb, Mail, School, Shield } from 'lucide-react';

function App() {
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
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Code2 className="w-16 h-16 text-cyan-400" />
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
          Transforming innovative ideas into impactful software solutions&nbsp;
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            🚀
          </motion.span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center mt-6 space-x-2"
        >
          <Mail className="w-5 h-5 text-cyan-400" />
          <a href="mailto:hello@taylorlabs.co" className="text-gray-300 hover:text-cyan-400 transition-colors">
            hello@taylorlabs.co
          </a>
        </motion.div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className="animated-border-box glass-effect p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">About Me 
              <motion.span
                animate={{ rotate: [0, 14, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Hi! I'm Evan Taylor, a Computer Science student at Cal Poly San Luis Obispo.
              I founded Taylor Labs to bring innovative tech ideas to life and create meaningful software products that make a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="animated-border-box glass-effect p-8"
            >
              <School className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Academics
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  📚
                </motion.span>
              </h3>
              <p className="text-gray-300">
                Pursuing Computer Science at Cal Poly SLO, combining theoretical knowledge with practical applications.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="animated-border-box glass-effect p-8"
            >
              <Shield className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-orange-400">Entrepreneurship 
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  💡
                </motion.span>
              </h3>
              <p className="text-gray-300">
                I have previously founded Taylored Instruction, providing essential CPR and lifeguard training to communities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">Our Vision 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block ml-2"
            >
              🎯
            </motion.span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="animated-border-box glass-effect p-6 text-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">Innovation</h3>
              <p className="text-gray-300">Turning creative ideas into reality</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="animated-border-box glass-effect p-6 text-center"
            >
              <motion.div
                animate={{ 
                  rotate: 360
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Technology</h3>
              <p className="text-gray-300">Building with cutting-edge tech</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="animated-border-box glass-effect p-6 text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">Impact</h3>
              <p className="text-gray-300">Making a difference through software</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="max-w-2xl mx-auto">
          <p className="mb-2">Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mx-1 text-pink-400"
            >
              💜
            </motion.span>
            in San Luis Obispo
          </p>
          <p className="text-sm">© 2024 Taylor Labs, LLC</p>
          <address className="not-italic text-xs mt-2 text-gray-500">
            2261 Market Street #86329, San Francisco, CA 94114
          </address>
        </div>
      </footer>
    </div>
  );
}

export default App;