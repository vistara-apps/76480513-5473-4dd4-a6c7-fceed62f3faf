'use client';

import { PropertyCard } from './PropertyCard';
import { MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    name: 'High Value NFTs',
    location: 'Gurgaon, India',
    price: '50.0 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 2,
    name: 'Gurgaon NFTs',
    location: 'Gurgaon, India',
    price: '45.5 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 3,
    name: 'Capitalist & Round NFTs',
    location: 'Silk Colony',
    price: '38.2 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 4,
    name: 'CSTM & Coolant',
    location: '303 Condo',
    price: '42.8 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    id: 5,
    name: 'Luxury Villa',
    location: 'Mumbai, India',
    price: '65.0 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: 6,
    name: 'Courtyard Casa',
    location: 'Gurgaon, India',
    price: '52.3 ETH',
    fractions: 240,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
];

export function PropertyGrid() {
  return (
    <section id="properties" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-fg mb-2">
              Limited Collection
            </h2>
            <p className="text-fg/60">Explore fractional ownership opportunities</p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg border border-border text-fg/80 hover:bg-surface transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 rounded-lg border border-border text-fg/80 hover:bg-surface transition-colors">
              Sort
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-xl overflow-hidden border border-border bg-surface">
          <div className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center bg-surface/50 backdrop-blur-sm">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-fg/80">Interactive property map</p>
                <p className="text-sm text-fg/60 mt-2">View all properties on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
