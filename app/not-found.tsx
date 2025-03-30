import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-6xl md:text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          Oops! It seems like the page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="gradient" size="lg" asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </main>
      
      <Footer />
    </div>
  );
} 