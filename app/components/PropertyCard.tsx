'use client';

import { Star, MapPin } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  fractions: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-surface border border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
          {property.price}
        </div>
        <button
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Add to favorites"
        >
          <Star className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-fg mb-2 group-hover:text-primary transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-fg/60 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-xs text-fg/60 mb-1">Available Fractions</div>
            <div className="text-sm font-semibold text-fg">{property.fractions} NFTs</div>
          </div>
          
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors text-sm font-medium">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
}
