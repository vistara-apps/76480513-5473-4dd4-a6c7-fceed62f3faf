'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-bg to-bg" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-fg mb-6 leading-tight">
            Real Property
            <br />
            <span className="text-primary">Marketplace Investment</span>
          </h1>
          
          <p className="text-xl text-fg/80 mb-8 leading-relaxed">
            Amazing for Gurgaon NFTs, limited collection, unique around 1240 properties each properties
          </p>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
            Learn Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
