export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-t-4 border-primary-500 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-r-4 border-primary-200 animate-pulse"></div>
      </div>
    </div>
  );
} 