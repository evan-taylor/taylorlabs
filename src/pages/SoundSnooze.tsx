import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Moon, Power, Headphones, Check, ArrowRight, Download } from 'lucide-react';

// FAQ items
const faqItems = [
  {
    question: "What does SoundSnooze do?",
    answer: "SoundSnooze automatically mutes your Mac's audio when you lock your screen, put your Mac to sleep, shut down, or disconnect your headphones. It also restores your volume when you return."
  },
  {
    question: "Does SoundSnooze require microphone access?",
    answer: "No, SoundSnooze is completely privacy-friendly and doesn't require microphone access. It only monitors system events like screen locks and headphone connections."
  },
  {
    question: "Will SoundSnooze slow down my Mac?",
    answer: "Not at all! SoundSnooze is extremely lightweight, using minimal CPU and memory resources. You won't even notice it's running."
  },
  {
    question: "How do I customize SoundSnooze?",
    answer: "SoundSnooze offers simple customization through its menu bar interface. You can choose which events trigger muting, set volume restoration levels, and configure other preferences."
  },
  {
    question: "Is SoundSnooze compatible with all Mac models?",
    answer: "SoundSnooze is compatible with all Macs running macOS 10.15 (Catalina) or newer."
  },
  {
    question: "How do I install SoundSnooze?",
    answer: "Simply download the DMG file, open it, and drag SoundSnooze to your Applications folder."
  }
];

function SoundSnooze() {
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
            <VolumeX className="w-16 h-16 text-cyan-400" />
          </motion.div>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 leading-tight"
        >
          SoundSnooze
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-center text-gray-300 max-w-2xl mx-auto"
        >
          Never worry about accidental sound leaks again. SoundSnooze automatically mutes your Mac when you step away.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <a
            href="/downloads/SoundSnooze.dmg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center"
          >
            Download for Free <Download className="ml-2 w-5 h-5" />
          </a>
          <a
            href="https://buymeacoffee.com/evan.taylor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center"
          >
            Support Us - Donate <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.header>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            Key Features
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
                  <Moon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Auto-Mute on Sleep</h3>
                  <p className="text-gray-300">
                    SoundSnooze automatically mutes your Mac when you put it to sleep or lock the screen.
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
                  <Headphones className="w-8 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Headphone Disconnect Detection</h3>
                  <p className="text-gray-300">
                    Automatically mutes when headphones are disconnected, preventing embarrassing audio leaks.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Power className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Shutdown Protection</h3>
                  <p className="text-gray-300">
                    Ensures your Mac is muted during shutdown to prevent startup sounds on next boot.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="animated-border-box glass-effect p-6"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Volume2 className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Volume Restoration</h3>
                  <p className="text-gray-300">
                    Intelligently restores your previous volume level when you return to your Mac.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="animated-border-box glass-effect p-6"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Check className="w-5 h-5 text-cyan-400 mr-2" />
                  {item.question}
                </h3>
                <p className="text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Taylor Labs, LLC. All rights reserved.</p>
        <p className="mt-2">
          SoundSnooze is provided as-is without any warranty. If you enjoy using it, consider supporting us with a donation.
        </p>
        <p className="mt-2">
          2261 Market Street #86329<br />
          San Francisco, CA 94114
        </p>
      </footer>
    </div>
  );
}

export default SoundSnooze;
