'use client';

import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { PropertyGrid } from './components/PropertyGrid';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl text-fg">Loading Propsperity...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <StatsBar />
      <PropertyGrid />
    </main>
  );
}
