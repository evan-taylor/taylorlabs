import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Taylor Labs</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building intuitive, delightful software that tackles real-world challenges—with clean code, seamless UX, and just the right amount of ✨magic✨.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:evan@evan-taylor.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaEnvelope size={20} />
              </a>
              <a href="https://linkedin.com/in/evan-l-taylor/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/evantaylor1104" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Taylor Labs LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 