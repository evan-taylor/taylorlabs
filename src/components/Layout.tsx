import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Main content */}
      <main className="bg-transparent">
        {children}
      </main>
    </div>
  );
}

export default Layout; 