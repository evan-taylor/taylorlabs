import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Taylor Labs Logo"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span className="font-bold text-xl">Taylor Labs</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink = ({ href, className, children }: NavLinkProps) => {
  return (
    <Link 
      href={href}
      className={cn(
        "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Header; 